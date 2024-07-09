import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

/**
 * 게시글 목록 Read
 *
 * @returns post[]
 */
export async function GET(request: NextRequest) {
  const supabase = createClient();

  const { data: posts } = await supabase.from("recommendation_posts").select();
  return NextResponse.json(posts);
}
