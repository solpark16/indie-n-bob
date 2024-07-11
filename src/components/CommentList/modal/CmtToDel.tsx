"use client";

import SITE_URL from "@/constant";
import { CommentType } from "@/types/Comments";
import { formatDateString } from "@/utils/formatDateString";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

interface PropsType {
  comment: CommentType;
  onClose: () => void;
}

const CmtToDel = ({ comment, onClose }: PropsType) => {
  const { post_id } = comment;
  const queryClient = useQueryClient();

  const { mutate: deleteComment } = useMutation({
    mutationFn: async (commentId: number) => {
      await fetch(`${SITE_URL}/api/posts/${post_id}/comments/${commentId}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", String(post_id)],
      });
    },
  });

  const handleDelbtn = (commentId: number) => {
    deleteComment(commentId);
    onClose();
  };

  return (
    <>
      <div className="w-[900px] h-[80px] flex justify-between items-center border-t border-b border-[#dddddd] text-[18px]">
        <div className="w-[850px] h-[80px] flex justify-start items-center">
          <Image
            src={comment?.users?.profile_image}
            width={50}
            height={50}
            alt="프로필 이미지"
            priority
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <p className="w-auto ml-[15px] text-black">
            {comment.author_nickname}
          </p>
        </div>
        <div className="w-[250px] flex justify-end items-center gap-[16px] text-[#A0A0A0]">
          <p>{formatDateString(comment.created_at)}</p>
        </div>
      </div>
      <p className="w-[850px] h-[25px] text-black text-[20px] mt-[20px]">
        {comment.content}
      </p>
      <div className="flex gap-[20px] pt-[70px] pl-[475px]">
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
          onClick={() => handleDelbtn(comment.comment_id)}
        >
          확인
        </button>
      </div>
    </>
  );
};

export default CmtToDel;
