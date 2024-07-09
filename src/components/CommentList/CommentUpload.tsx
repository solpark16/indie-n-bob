import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

// 댓글 45자 이내

const CommentUpload = ({ postId }: Params) => {
  return (
    <div className="w-full flex justify-between items-center mt-[27px]">
      <input
        placeholder="댓글을 입력해주세요."
        className="w-[1130px] h-[70px] rounded-[10px] bg-[#f4f4f4] text-[18px] indent-[25px] focus:outline-none"
      />
      <button className="w-[135px] h-[70px] rounded-[10px] bg-[#10AF86] text-white text-[25px] hover:bg-[#0e9a77] transition duration-200">
        등록
      </button>
    </div>
  );
};

export default CommentUpload;
