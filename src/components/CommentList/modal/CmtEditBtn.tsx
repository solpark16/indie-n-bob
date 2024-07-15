"use client";

import React, { useState } from "react";
import CmtEditModal from "./CmtEditModal";
import { CommentType } from "@/types/Comments";

interface PropsType {
  comment: CommentType;
}

const CmtEditBtn = ({ comment }: PropsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        className="w-[42px] hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        수정
      </button>
      {isModalOpen && (
        <CmtEditModal comment={comment} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default CmtEditBtn;
