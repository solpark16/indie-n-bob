export type Auth = {
  email: string;
  password: string;
  nickname: string;
  is_admin: boolean;
  favorite_artist: string[];
  profile_image: string;
  user_metadata: {
    nickname: string;
  };
};

export type AuthStore = {
  user: Auth;
  email: string;
  nickname: string;
  password: string;
  favorite_artist: string[];
  is_admin: boolean;
  error: {
    password: string;
    nickname: string;
  };

  fetchUser: () => Promise<Auth>;
  setUser: (user: Auth) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setNickname: (nickname: string) => void;
  setFavoriteArtists: (favoriteArtists: string[]) => void;
  setIsAdmin: (is_admin: boolean) => void;
  setError: (error: Partial<AuthStore["error"]>) => void;
};
