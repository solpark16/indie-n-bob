import { AuthStore } from "@/types/Auth";
import create from "zustand";

export const useAuthStore = create<AuthStore>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
  nickname: "",
  setNickname: (nickname) => set({ nickname }),
  favorite_artist: [],
  setFavoriteArtists: (artists) => set({ favorite_artist: artists }),
  is_admin: false,
  setIsAdmin: (is_admin) => set({ is_admin }),
  error: {
    password: "",
    nickname: "",
  },
  setError: (error) =>
    set((state) => ({ error: { ...state.error, ...error } })),
}));
