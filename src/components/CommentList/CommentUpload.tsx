"use client";

import SITE_URL from "@/constant";
import { NewCommentType } from "@/types/Comments";
import { createClient } from "@/utils/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { useEffect, useRef, useState } from "react";

// 댓글 45자 이내

const CommentUpload = ({ postId }: Params) => {
  const contentRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    //현재 로그인된 사용자의 프로필 정보를 가져오는 메서드
    const supabase = createClient();
    const fetchData = async () => {
      const { data, error: getUserError } = await supabase.auth.getUser();
      setUser(data.user);
      return data.user;
    };
    fetchData();
  }, []);

  console.log(user);

  const { mutate: createComment } = useMutation({
    mutationFn: async (item: NewCommentType) => {
      await fetch(`${SITE_URL}/api/posts/${postId}/comments`, {
        method: "POST",
        body: JSON.stringify(item),
      });
    },
    onSuccess: () => {},
  });

  // 로그인 이후에 수정
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contentRef.current) {
      console.log(contentRef.current.value);
    }
    const newComment: NewCommentType = {
      post_id: +postId,
      author_nickname: "", // 로그인한 유저 닉네임
      content: contentRef.current.value,
      author_id: "", //로그인한 유저의 아이디
    };
    createComment(newComment);
  };

  return (
    <form
      className="w-full flex justify-between items-center mt-[27px]"
      onSubmit={handleSubmit}
    >
      <input
        ref={contentRef}
        type="text"
        placeholder="댓글을 입력해주세요."
        className="w-[1130px] h-[70px] rounded-[10px] bg-[#f4f4f4] text-[18px] indent-[25px] focus:outline-none"
      />
      <button className="w-[135px] h-[70px] rounded-[10px] bg-[#10AF86] text-white text-[25px] hover:bg-[#0e9a77] transition duration-200">
        등록
      </button>
    </form>
  );
};

export default CommentUpload;
