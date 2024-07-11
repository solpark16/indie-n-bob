import supabase from "./supabase/client"

export default async function getLikes() {
    
    const { data: likes, error: likesError } = await supabase
    .from('recommendation_likes')
    .select('*')

    if (likesError) {
        throw new Error('Failed to fetch likes')
    }

    return { likes, likesError }
}