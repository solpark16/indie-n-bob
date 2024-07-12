import supabase from "./supabase/client";

export default async function getMyPosts(page = 0, limit = 6) {


    const { data: posts, error: postError, count } = await supabase
        .from('concert_posts')
        .select(`*, concert_likes(post_id)`, { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(page * limit, (page + 1) * limit - 1);

        if (postError) {
          throw new Error(postError.message);
        }
    const nextCursor = (page + 1) * limit < count ? page + 1 : null;

    return { posts, nextCursor };
}