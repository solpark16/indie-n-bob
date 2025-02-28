import { getUser } from "./getUser";
import supabase from "../supabase/client";

export default async function getMyInfo() {

    const user = await getUser();
    if (!user) {
        return null;
    }

    const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', user.id);

    if (userError || !userData || userData.length === 0) {
        return { userData: null, userError };
    }

    return { userData: userData[0], userError };
}