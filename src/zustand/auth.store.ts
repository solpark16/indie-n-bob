import { AuthStore } from "@/types/Auth";
import axios from "axios";
import { create } from "zustand";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  email: "",
  password: "",
  nickname: "",
  favorite_artist: [],
  is_admin: false,
  error: {
    password: "",
    nickname: "",
  },

  fetchUser: async () => {
    const { data: userData } = await axios.get("/api/auth/login");
    if (userData) {
      set({ user: userData });
      return userData;
    } else {
      console.error("회원정보를 가져오지 못했습니다.");
    }
  },

  setUser: (user) => set({ user }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setNickname: (nickname) => set({ nickname }),
  setFavoriteArtists: (artists) => set({ favorite_artist: artists }),
  setIsAdmin: (is_admin) => set({ is_admin }),
  setError: (error) =>
    set((state) => ({ error: { ...state.error, ...error } })),
}));
