import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const TABLE_NAME = "recommendation_comments";

type DeleteParameter = {
  params: { postId: number; commentId: number };
};

// 댓글 삭제
export async function DELETE(request: NextRequest, params: DeleteParameter) {
  const supabase = createClient();
  const {
    params: { commentId },
  } = params;
  const { data: deletedComment, error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("comment_id", commentId);

  return NextResponse.json(error ? error : `댓글(${commentId}) 삭제 완료`);
}
