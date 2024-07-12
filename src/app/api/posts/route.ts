import { Tables } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const PAGE_LIMIT = 10;

type response = {
  data : {posts : Tables<"recommendation_posts">[], count : number, hasNext : boolean},
  error : PostgrestError | null;
}

/**
 * 게시글 목록 Read
 *
 * @returns post[]
 */
export async function GET(request:NextRequest) {
  const { searchParams  } = request.nextUrl;
  const pageNo = Number(searchParams.get("pageNo")) ?? 0;

  const startRowNo = pageNo * PAGE_LIMIT;
  const endRowNo = (pageNo + 1) * PAGE_LIMIT -1;

  const supabase = createClient();
  const { data: posts, error, count } = await supabase
    .from("recommendation_posts")
    .select('*', { count: 'exact' })
    .range(startRowNo, endRowNo);
    
  const hasNext = count ? count / PAGE_LIMIT > pageNo + 1  : false;
  return NextResponse.json({ posts, hasNext, currentPageNo : pageNo, error });
}
