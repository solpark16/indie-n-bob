import { Json } from "./supabase";

export type CommentType = {
  comment_id: number ;
  created_at: string | null;
  post_id: number | null;
  author_nickname: string | null;
  content: string | null;
  author_id: string | null;
  users: {
    created_at: string;
    email: string | null;
    favorite_artist: Json | null;
    is_admin: boolean | null;
    nickname: string | null;
    profile_image: string | null;
    user_id: string;
  };
};

export type NewCommentType = {
  post_id: number | null;
  author_nickname: string | null;
  content: string | null;
  author_id: string | null;
};

export type CommentWriter = {
  user_metadata: {
    nickname: string;
    sub: string;
  };
};

export type PaginationParams = {
  limit: number;
  offset: number;
};
