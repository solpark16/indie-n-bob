import { Tables } from '@/types/supabase';
import { PostgrestError } from '@supabase/supabase-js';
import { getUser } from "./getUser";
import supabase from "./supabase/client";

type MyInfo = {
    userData : Tables<"users"> | null; 
    userError : PostgrestError | null; 
};

export default async function getMyInfo() : Promise<MyInfo | null> {

    const user = await getUser();
    if (!user) {
        return null;
    }

    const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', user.id)
        .single();

    return { userData: userData, userError };
}