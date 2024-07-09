export type CommentType = {
  comment_id: number;
  created_at: Date;
  post_id: number;
  author_nickname: string;
  content: string;
  author_id: string;
};
