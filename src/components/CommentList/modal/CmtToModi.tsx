"use client";

import { CommentType } from "@/types/Comments";
import { formatDateString } from "@/utils/formatDateString";
import Image from "next/image";
import React, { useRef } from "react";
import Swal from "sweetalert2";

//댓글 45자 이내

interface PropsType {
  comment: CommentType;
  onClose: () => void;
}

const CmtToModi = ({ comment, onClose }: PropsType) => {
  const contentRef = useRef<HTMLInputElement>(null);
  const { post_id, author_id, author_nickname } = comment;

  const handleEditBtn = () => {
    if (contentRef.current) {
      if (contentRef.current.value.length > 40) {
        Swal.fire({
          title: "수정이 제한되었습니다.",
          text: "댓글은 40자 이내로 작성해주세요.",
          icon: "warning",
          cancelButtonText: "확인",
          cancelButtonColor: "#A04741",
        });
        return;
      }

      const editedComment = {
        post_id,
        author_id,
        author_nickname,
        content: contentRef?.current?.value,
      };

      console.log(editedComment);
    }
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
          <p className="w-[110px] ml-[15px] text-black">
            {comment.author_nickname}
          </p>
        </div>
        <div className="w-[250px] flex justify-end items-center gap-[16px] text-[#A0A0A0]">
          <p>{formatDateString(comment.created_at)}</p>
        </div>
      </div>
      <input
        ref={contentRef}
        placeholder="수정할 내용을 입력하세요."
        defaultValue={comment.content}
        className="w-[850px] h-[25px] text-black text-[20px] mt-[20px] focus:outline-none"
      />
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
          onClick={handleEditBtn}
        >
          확인
        </button>
      </div>
    </>
  );
};

export default CmtToModi;
