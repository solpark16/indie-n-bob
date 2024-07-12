import supabase from "./supabase/client";

export default async function getMyPosts(page = 0, limit = 3) {


    const { data: posts, error: postError, count } = await supabase
        .from('concert_posts').select(`*, concert_likes(post_id)`)
        .select(`*, concert_likes(post_id)`, { count: 'exact' })
        .range(page * limit, (page + 1) * limit - 1);

    const nextCursor = (page + 1) * limit < count ? page + 1 : null;

    if (posts.length === 0) {
        return { posts, postError, nextCursor: null };
    }

    return { posts, postError, nextCursor };
}