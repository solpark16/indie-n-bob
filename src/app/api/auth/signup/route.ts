import { createClient } from "@/supabase/server";
import { Auth } from "@/types/Auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const supabase = createClient();
  try {
    const { email, password, nickname, is_admin, favorite_artist }: Auth =
      await request.json();

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: {
            nickname,
            is_admin,
            favorite_artist,
          },
        },
      }
    );

    if (signUpError) {
      return NextResponse.json({ error: signUpError.message }, { status: 400 });
    }

    const { error: insertError } = await supabase.from("users").insert([
      {
        user_id: signUpData.user.id,
        email,
        nickname,
        is_admin,
        favorite_artist,
      },
    ]);

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 400 });
    }

    return NextResponse.json(signUpData);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const supabase = createClient();
  try {
    const { data: signOutData } = await supabase.auth.getUser();
    console.log("signOutData", signOutData);

    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) {
      return NextResponse.json(
        { error: signOutError.message },
        { status: 400 }
      );
    }

    const { error: deleteError } = await supabase
      .from("users")
      .delete()
      .eq("user_id", signOutData.user.id);
    if (deleteError) {
      return NextResponse.json({ error: deleteError.message }, { status: 400 });
    }

    return NextResponse.json({ message: "로그아웃 성공" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
