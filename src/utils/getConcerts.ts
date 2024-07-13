import supabase from "./supabase/client";

export default async function getConcerts(page = 0, sort = "latest") {
    const limit = 6

    let query = supabase.from('concert_posts').select(`*, concert_likes(post_id)`, { count: 'exact' });
    
      if (sort === "latest"){
        query = query.order('created_at', { ascending: false })
      } else if (sort === "imminent") {
        query = query.order('end_date', {ascending:true})
      }

      const {data:posts, error: postError, count} = await query

      if (postError) {
        throw new Error(postError.message);
      }

      let sortedPosts = posts;
      if (sort === "ranking"){
        sortedPosts = posts.sort((a,b)=>b.concert_likes.length - a.concert_likes.length)
      }

      const start = page * limit;
      const end = start + limit;
      const paginatedPosts = sortedPosts.slice(start, end);

      if (count){
        const nextCursor = end < count ? page + 1 : null;
        return { posts: paginatedPosts, nextCursor };
      }
    return { posts: paginatedPosts, nextCursor: null };
}