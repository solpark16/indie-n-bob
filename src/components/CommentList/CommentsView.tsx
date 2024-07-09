"use client";

import { useQuery } from "@tanstack/react-query";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useState } from "react";
import Comment from "./Comment";

const CommentsView = ({ postId }: Params) => {
  const [pageNo, setPageNo] = useState(1);
  const [clickedPage, setClickedPage] = useState(1);
  const handleClickPageBtn = async (num: number) => {
    setClickedPage(num);
    setPageNo(num);
  };

  const {
    data: comments,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const response = await fetch(`/api/posts/${postId}/comments`);
      return await response.json();
    },
  });

  if (isPending) {
    return <h1>댓글 불러오는 중 ···</h1>;
  }

  if (isError) {
    return <h1>댓글 불러오기 실패 ㅠㅠ</h1>;
  }

  return (
    <div className="mt-[5px] text-[18px]">
      <p className="w-full h-[90px] flex items-center text-[#8D8D8D] ">
        댓글 ({comments.length})
      </p>
      {comments.map((comment) => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}

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
