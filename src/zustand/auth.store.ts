import { AuthStore } from "@/types/Auth";
import { create } from "zustand";

export const useAuthStore = create<AuthStore>((set) => ({
  email: "",
  password: "",
  nickname: "",
  favorite_artist: [],
  is_admin: false,
  error: {
    email:"",
    password: "",
    nickname: "",
  },

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setNickname: (nickname) => set({ nickname }),
  setFavoriteArtists: (artists) => set({ favorite_artist: artists }),
  setIsAdmin: (is_admin) => set({ is_admin }),
  setError: (error) =>
    set((state) => ({ error: { ...state.error, ...error } })),
}));
