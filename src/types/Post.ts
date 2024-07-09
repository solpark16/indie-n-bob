export type Post = {
  title: string;
  content: string;
  nickname: string;
  hashtags: string[]; // TODO 일단은 걍 두개 쓰자
  image?: string;
};

// TODO supabase 타입 추론 전까지 잠시 쓸 것
export type PostInDB = {
  post_id: number;
  created_at: Date;
  author_id: string;
  author_nickname: string;
  hashtag: { tags: string[] };
  likes?: number; // TODO DB 조인해서 가져와야함
} & Post;
