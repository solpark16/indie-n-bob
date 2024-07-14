"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CmtEditBtn from "./modal/CmtEditBtn";
import CmtDelBtn from "./modal/CmtDelBtn";
import { CommentType } from "@/types/Comments";
import { formatDateString } from "@/utils/formatDateString";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

interface PropsType {
  comment: CommentType;
}

const Comment = ({ comment }: PropsType) => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const supabase = createClient();
    const fetchData = async (): Promise<void> => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUserData(user);
      }
      return;
    };
    fetchData();
  }, []);

  const user = userData?.user_metadata;
  const profileImgSrc = comment?.users?.profile_image;
  const isOwnedUser: boolean = user?.sub === comment?.author_id;

  return (
    <div className="w-full h-full flex justify-between items-start border-b border-[#dddddd]">
      <div className="w-full min-w-[300px] min-h-[95px] flex justify-start items-start pt-4 pb-4">
        <Image
          src={profileImgSrc ? profileImgSrc : "/user/fallback-avatar.svg"}
          width={50}
          height={50}
          alt="프로필 이미지"
          priority
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <span className="w-32 min-w-[128px] ml-[15px] pt-[10px]">
          {comment?.users?.nickname}
        </span>
        <span className="w-auto max-w-[700px] min-w-[100px] pt-[10px] pb-[10px]">
          {comment?.content}
        </span>
      </div>
      <div className="ml-auto min-w-[250px] min-h-[95px] flex justify-end items-center gap-[10px] text-[#A0A0A0]">
        <span className="w-auto min-w-[140px]">
          {typeof comment?.created_at === "string"
            ? formatDateString(comment?.created_at)
            : null}
        </span>
        <div
          className={`w-[95px] h-[20px] flex justify-between items-center ${
            !isOwnedUser && "hidden"
          }`}
        >
          <CmtEditBtn comment={comment} />
          <span>|</span>
          <CmtDelBtn comment={comment} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
