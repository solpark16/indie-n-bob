export type Concert = {
  post_id: string;
  title: string;
  image?: string;
  region: string;
  start_date: string;
  end_date: string;
  time: string;
  age: string;
  price: string;
  link: string;
  content: string;
  author_id: string | undefined;
  created_at?: string;
  users?: {
    nickname: string | null;
    profile_image: string | null;
  } | null;
};

export type ConcertInDB = {
  
  author_id: string;
  author_nickname: string;
  users: {
    nickname: string;
    profile_image: string;
  };
  concert_likes: [];
  // likes?: number; // TODO DB 조인해서 가져와야함
} & Concert;
