import { Auth } from "@/types/Auth";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const supabase = createClient();

    try {
        const { email }: Auth = await request.json();

        // 이메일 중복 검사
        const { data: emailCheckData, error: emailCheckError } = await supabase
            .from("users")
            .select("user_id")
            .eq("email", email)
            .single();

            //More than 1 or no items where returned when requesting a singular response
            //PGRST116는 레코드에 반환하는 행이 없다는 에러 코드
            //새로운 이메일을 입력 => 테이블에 입력한 이메일과 일치하는 데이터가 없다 => 에러로 간주
            if (emailCheckError && emailCheckError.code !== 'PGRST116') { 
                throw new Error(emailCheckError.message);
            }

        if (emailCheckData) {
            return NextResponse.json({ exists: true }, { status: 200 });
        }

        return NextResponse.json({ exists: false }, { status: 200 });

    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
