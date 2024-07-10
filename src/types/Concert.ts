export type Concert = {
  title: string;
  content: string;
  nickname: string;
  hashtags: string[]; // TODO 일단은 걍 두개 쓰자
  region: string;
  start_date: string;
  end_date: string;
  time: number;
  image?: string;
  price: string;
  age: string;
  link: string;
};

// TODO supabase 타입 추론 전까지 잠시 쓸 것
export type ConcertInDB = {
  post_id: number;
  created_at: Date;
  author_id: string;
  author_nickname: string;
  users: {
    nickname: string;
    profile_image: string;
  };
  // likes?: number; // TODO DB 조인해서 가져와야함
} & Concert;
