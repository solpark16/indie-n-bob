import supabase from "../supabase/client";
import { getUser } from "./getUser";

export default async function getMyPosts(page = 0, limit = 3) {
    const user = await getUser();

    if (!user) {
        return { posts: [], postError: null, nextCursor: null };
    }

    const { data: posts, error: postError, count : countData } = await supabase
        .from('recommendation_posts')
        .select('*', { count: 'exact' })
        .eq('author_id', user.id)
        .range(page * limit, (page + 1) * limit - 1);

    const count: number = countData ?? 0;
    const nextCursor = (page + 1) * limit < count ? page + 1 : null;

    if (posts?.length === 0) {
        return { posts, postError, nextCursor: null };
    }

    return { posts, postError, nextCursor };
}