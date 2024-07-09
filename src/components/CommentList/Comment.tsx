import Image from "next/image";
import React from "react";
import CmtEditBtn from "./modal/CmtEditBtn";
import CmtDelBtn from "./modal/CmtDelBtn";
import { CommentType } from "@/types/Comments";
import { formatDateString } from "@/utils/formatDateString";

interface PropsType {
  comment: CommentType;
}

const Comment = ({ comment }: PropsType) => {
  return (
    <div className="w-full h-[95px] flex justify-between items-center border-b border-[#dddddd]">
      <div className="w-full h-[95px] flex justify-start items-center">
        {/* 로그인/회원가입 기능 dev에 합쳐진 이후에 */}
        {/* 댓글 작성자의 id를 갖고 user 테이블에서 profile_image 가져오기 => CommentsView.tsx에서 !!!*/}
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="프로필 이미지"
          priority
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <p className="w-[110px] ml-[15px]">{comment.author_nickname}</p>
        {/* 상위에 w-full 주고 % 또는 tailwind에서 제공하는 값으로 width주기 ///  min-w 또는 max-w만 px로 값 주기*/}
        <p className="w-">{comment.content}</p>
      </div>
      <div className="w-[250px] flex justify-end items-center gap-[16px] text-[#A0A0A0]">
        <p>{formatDateString(comment.created_at)}</p>
        {/* 지원: 현재 로그인한 유저의 id와 댓글 작성자의 id를 비교해 같은 경우에만 아래 버튼들 렌더링 */}
        <div className="w-[95px] flex justify-between items-center">
          <CmtEditBtn />
          <p>|</p>
          <CmtDelBtn />
        </div>
      </div>
    </div>
  );
};

export default Comment;
