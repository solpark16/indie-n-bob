import { getUser } from "./getUser";
import supabase from "./supabase/client";

export default async function getMyPosts() {

    const user = await getUser();

    if (!user) {
        return null;
    }

    // const supabase = createClient();
    const { data: posts, error: postError } = await supabase
        .from('recommendation_posts')
        .select('*')
        .eq('author_id', user.id);

    return { posts, postError };
}