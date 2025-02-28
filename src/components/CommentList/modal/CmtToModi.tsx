"use client";

import SITE_URL from "@/constant";
import { CommentType, EditCommentType, NewCommentType } from "@/types/Comments";
import { formatDateString } from "@/utils/formatDateString";
import { createClient } from "@/utils/supabase/client";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Image from "next/image";
import React, { useRef } from "react";

interface PropsType {
  comment: CommentType;
  onClose: () => void;
}

const supabase = createClient();

const CmtToModi = ({ comment, onClose }: PropsType) => {
  const contentRef = useRef<HTMLInputElement>(null);
  const { post_id, author_id, author_nickname, comment_id } = comment;
  const profileImgSrc: string | null = comment?.users?.profile_image;
  const queryClient: QueryClient = useQueryClient();

  const { mutate: editComment } = useMutation({
    mutationFn: async (item: EditCommentType) => {
      await supabase
        .from("recommendation_comments")
        .update(item)
        .eq("comment_id", comment_id)
        .select();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", String(post_id)],
      });
    },
  });

  const handleEditBtn = (): void => {
    if (contentRef.current) {
      const editedComment: EditCommentType = {
        post_id,
        author_id,
        author_nickname,
        comment_id,
        content: contentRef?.current?.value,
      };

      editComment(editedComment);
      onClose();
    }
  };

  return (
    <>
      <div className="w-[900px] h-[80px] flex justify-between items-center border-t border-b border-[#dddddd] text-[18px]">
        <div className="w-[850px] h-[80px] flex justify-start items-center">
          <Image
            src={profileImgSrc ? profileImgSrc : "/user/fallback-avatar.svg"}
            width={50}
            height={50}
            alt="프로필 이미지"
            priority
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <span className="w-auto ml-[15px] text-black hover:cursor-default">
            {comment?.users?.nickname}
          </span>
        </div>
        <div className="w-[250px] flex justify-end items-center gap-[16px] text-[#A0A0A0]">
          <span className="hover:cursor-default">
            {typeof comment?.created_at === "string"
              ? formatDateString(comment?.created_at)
              : null}
          </span>
        </div>
      </div>
      <input
        ref={contentRef}
        placeholder="수정할 내용을 입력하세요."
        defaultValue={comment?.content ? comment?.content : "수정할 댓글 내용"}
        className="w-[850px] min-h-[25px] resize-none text-black text-[20px] mt-[20px] focus:outline-none"
      />
      <div className="flex gap-[20px] pt-[25px] pb-[25px] pl-[475px]">
        <button
          type="button"
          className="w-[200px] h-[55px] rounded-[10px] bg-[#EFEFEF] text-[#747474] hover:bg-[#d7d7d7] transition duration-200"
          onClick={onClose}
        >
          취소
        </button>
        <button
          type="button"
          className="w-[200px] h-[55px] rounded-[10px] bg-[#10AF86] text-white hover:bg-[#0e9a77] transition duration-200"
          onClick={handleEditBtn}
        >
          확인
        </button>
      </div>
    </>
  );
};

export default CmtToModi;
