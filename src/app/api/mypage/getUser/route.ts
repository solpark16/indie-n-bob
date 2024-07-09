import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
    const supabase = createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError) {
        return NextResponse.json({ error: authError.message }, { status: 401 });
    }

    const { data, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', user.id)
        .single();

    if (userError) {
        return NextResponse.json({ error: userError.message }, { status: 500 });
    }

    return NextResponse.json(data);
}