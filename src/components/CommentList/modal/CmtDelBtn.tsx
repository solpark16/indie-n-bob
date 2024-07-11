"use client";
import React, { useState } from "react";
import CmtDelModal from "./CmtDelModal";
import { CommentType } from "@/types/Comments";

interface PropsType {
  comment: CommentType;
}

const CmtDelBtn = ({ comment }: PropsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="w-[42px] hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        삭제
      </button>
      {isModalOpen && (
        <CmtDelModal comment={comment} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default CmtDelBtn;
