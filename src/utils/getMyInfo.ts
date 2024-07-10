import { getUser } from "./getUser";
import { createClient } from "./supabase/client";


export default async function getMyInfo() {

    const user = await getUser();
    if (!user) {
        return null;
    }
    const supabase = createClient();
    const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', user.id);

    return { userData, userError };
}