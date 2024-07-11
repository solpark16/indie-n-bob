import { Json } from "./supabase";

export type CommentType = {
  comment_id: number;
  created_at: string;
  post_id: number;
  author_nickname: string;
  content: string;
  author_id: string;
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
  post_id: number;
  author_nickname: string;
  content: string;
  author_id: string;
};

export type CommentWriter = {
  user_metadata: {
    nickname: string;
    sub: string;
  };
};

export type CommentsStore = {
  post_id: number;
  author_nickname: string;
  content: string;
  author_id: string;

  setPostId: (postId: number) => void;
  setAuthorNickname: (authorNickname: string) => void;
  setContent: (content: string) => void;
  setAuthorId: (authorId: string) => void;
};

export type UserDataType = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: {
    email: string;
    email_verified: false;
    favorite_artist: string[];
    is_admin: boolean;
    nickname: string;
    phone_verified: boolean;
    sub: string;
  };
  identities: [
    {
      identity_id: string;
      id: string;
      user_id: string;
      identity_data: {
        email: string;
        email_verified: boolean;
        favorite_artist: string[];
        is_admin: boolean;
        nickname: string;
        phone_verified: boolean;
        sub: string;
      };
      provider: string;
      last_sign_in_at: string;
      created_at: string;
      updated_at: string;
      email: string;
    }
  ];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
