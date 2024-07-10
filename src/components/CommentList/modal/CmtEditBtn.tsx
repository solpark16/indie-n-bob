"use client";

import React, { useState } from "react";
import CmtEditModal from "./CmtEditModal";

const CmtEditBtn = ({ commentId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        className="w-[42px] hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        수정
      </button>
      {isModalOpen && <CmtEditModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default CmtEditBtn;
