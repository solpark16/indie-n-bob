"use client";
import React, { useState } from "react";
import CmtDelModal from "./CmtDelModal";

const CmtDelBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="w-[42px] hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        삭제
      </button>
      {isModalOpen && <CmtDelModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default CmtDelBtn;
