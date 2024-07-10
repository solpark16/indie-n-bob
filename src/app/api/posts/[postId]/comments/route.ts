import { CommentType, NewCommentType } from "@/types/Comments";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const TABLE_NAME = "recommendation_comments";
const PK_COLUMN_NAME = "post_id";

type GetParameter = {
  params: { postId: number };
};

type PostParameter = {
  params: { postId: number };
  commentId: number;
  comment: CommentType;
};

type PutParameter = {
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
  const supabase = createClient();
  const item = await request.json();
  const { comment_id } = item;
  const { data: editedComment } = await supabase
    .from(TABLE_NAME)
    .update(item)
    .eq("comment_id", comment_id);

  return NextResponse.json(editedComment);
}

// 댓글 삭제
