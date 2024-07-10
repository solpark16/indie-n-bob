import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const TABLE_NAME = "recommendation_comments";
const PK_COLUMN_NAME = "post_id";

type parameter = {
  params: { postId: number };
};

// 게시물 당 댓글목록 Read
export async function GET(_: NextRequest, params: parameter) {
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
