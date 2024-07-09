import { createClient } from "@/supabase/server";
import { CommentType } from "@/types/Comments";
import { NextRequest, NextResponse } from "next/server";

const TABLE_NAME = "recommendation_comments";
const PK_COLUMN_NAME = "comment_id";

type parameter = {
  params: { postId: number };
  commentId: number;
  comment: CommentType;
};

// 댓글 등록
export async function POST(_: NextRequest, comment: CommentType) {
  const supabase = createClient();
  const { data: postedComment } = await supabase
    .from(TABLE_NAME)
    .insert(comment);

  return NextResponse.json(postedComment);
}
