import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const TABLE_NAME = "recommendation_comments";
const PK_COLUMN_NAME = "post_id";

type GetParameter = {
  params: { postId: number };
};

type DeleteParameter = {
  commentId: number;
};

// 게시물 당 댓글목록 Read
export async function GET(_: NextRequest, params: GetParameter) {
  const {
    params: { postId: id },
  } = params;

  const supabase = createClient();
  const { data: comments } = await supabase
    .from(TABLE_NAME)
    .select("*, users:author_id(*)")
    .eq(PK_COLUMN_NAME, id);

  // 시간순으로 sort해서 넘겨주기
  comments.sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );
  return NextResponse.json(comments);
}

// 댓글 등록
export async function POST(request: NextRequest) {
  const supabase = createClient();
  const item = await request.json();
  const { data: postedComment } = await supabase.from(TABLE_NAME).insert(item);

  return NextResponse.json(postedComment);
}

// 댓글 수정
export async function PUT(request: NextRequest) {
  try {
    const supabase = createClient();
    const item = await request.json();
    const { comment_id } = item;
    const { data: editedComment, error } = await supabase
      .from(TABLE_NAME)
      .update(item)
      .eq("comment_id", comment_id)
      .select();

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(editedComment);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// 댓글 삭제
export async function DELETE(request: NextRequest, commentId: DeleteParameter) {
  const supabase = createClient();
  console.log(commentId);
  const { data: deletedComment, error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("comment_id", commentId);

  console.log(deletedComment);

  return NextResponse.json(error ? error : `댓글(${commentId}) 삭제 완료`);
}
