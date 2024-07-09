"use client";

import React, { useState } from "react";
import Comment from "./Comment";

const CommentsView = () => {
  const [pageNo, setPageNo] = useState(1);
  const [clickedPage, setClickedPage] = useState(1);
  const handleClickPageBtn = async (num: number) => {
    setClickedPage(num);
    setPageNo(num);
  };

  return (
    <div className="mt-[5px] text-[18px]">
      <p className="w-[1250px] h-[90px] flex items-center text-[#8D8D8D] ">
        댓글 (5)
      </p>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <div className="w-full h-[100px] flex justify-center items-center gap-5">
        {[...Array(5)].map((_, index) => {
          return (
            <button
              key={index + 1}
              onClick={() => handleClickPageBtn(index + 1)}
              className={`hover:cursor-pointer ${
                clickedPage === index + 1 ? "text-[#10AF86]" : "text-[#616161]"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsView;
