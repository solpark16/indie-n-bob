import { createClient } from "@/utirls/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return NextResponse.json(user);
}