"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CmtEditBtn from "./modal/CmtEditBtn";
import CmtDelBtn from "./modal/CmtDelBtn";
import { CommentType, CommentWriter } from "@/types/Comments";
import { formatDateString } from "@/utils/formatDateString";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

interface PropsType {
  comment: CommentType;
}

const Comment = ({ comment }: PropsType) => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    //현재 로그인된 사용자의 프로필 정보를 가져오는 메서드
    const supabase = createClient();
    const fetchData = async (): Promise<void> => {
      const {
        data: { user },
        error: getUserError,
      } = await supabase.auth.getUser();
      setUserData(user);
      return;
    };
    fetchData();
  }, []);

  const user = userData?.user_metadata;

  return (
    <div className="w-full h-[95px] flex justify-between items-center border-b border-[#dddddd]">
      <div className="w-full h-[95px] flex justify-start items-center">
        <Image
          src={comment?.users?.profile_image}
          width={50}
          height={50}
          alt="프로필 이미지"
          priority
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <p className="w-[110px] ml-[15px]">
          {comment.author_nickname.slice(0, 6)}
        </p>
        {/* 반응형: 상위에 w-full 주고 % 또는 tailwind에서 제공하는 값으로 width주기 ///  min-w 또는 max-w만 px로 값 주기*/}
        <p className="w-[700px]">{comment.content}</p>
      </div>
      <div className="ml-auto flex justify-end items-center gap-[16px] text-[#A0A0A0]">
        <p>{formatDateString(comment.created_at)}</p>
        {/* 지원: 현재 로그인한 유저의 id와 댓글 작성자의 id를 비교해 같은 경우에만 아래 버튼들 렌더링 */}
        {user?.sub !== comment?.author_id ? (
          <></>
        ) : (
          <div className="w-[95px] h-[20px] flex justify-between items-center">
            <CmtEditBtn comment={comment} />
            <p>|</p>
            <CmtDelBtn comment={comment} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
