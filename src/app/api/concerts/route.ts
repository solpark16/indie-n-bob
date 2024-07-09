import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

/**
 * 공연 목록 Read
 *
 * @returns post[]
 */
export async function GET(request: NextRequest) {
  const supabase = createClient();

  const { data: concerts } = await supabase.from("concert_posts").select();
  return NextResponse.json(concerts);
}
