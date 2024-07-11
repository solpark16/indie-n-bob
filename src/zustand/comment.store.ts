import { create } from "zustand";

// CommentsStore 새로 만들기
export const useCommentsStore = create((set) => ({
  post_id: 1,
  author_nickname: "string",
  content: "",
  author_id: "",

  setPostId: (postId) => set({ postId }),
  setAuthorNickname: (authorNickname) => set({ authorNickname }),
  setContent: (content) => set({ content }),
  setAuthorId: (authorId) => set({ authorId }),
}));
