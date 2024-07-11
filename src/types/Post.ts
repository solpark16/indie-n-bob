import { Tables } from './supabase';

export type Post<hasFullColumns extends boolean = true>
  = (hasFullColumns extends true
    ? (Tables<"recommendation_posts"> & { likes : number })
    : {
      title: string;
      content: string;
      nickname?: string | null;
      hashtags: string[];
      image?: string | null;
    });

/**
 *   author 부분은 Tables<"users">의 일부를 가져온 것
 */
export type PostWithAuthor = Post<true> & { author: { nickname : string, profile_image : string} }