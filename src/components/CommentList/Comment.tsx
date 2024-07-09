import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div className="w-full h-[95px] flex justify-between items-center border-b border-[#dddddd]">
      <div className="w-[1015px] h-[95px] flex justify-start items-center">
        <Image
          src="/logo.png"
          width={48}
          height={48}
          alt="프로필 이미지"
          priority
          className="w-[48px] h-[48px] rounded-full object-cover"
        />
        <p className="w-[110px] ml-[15px]">병준원영</p>
        <p className="w-[840px]">저도 봤습니다 최곱니다...</p>
      </div>
      <div className="w-[250px] flex justify-end items-center gap-[16px] text-[#A0A0A0]">
        <p>2024.07.08 21:27</p>
        <div className="w-[95px] flex justify-between items-center">
          <button className="w-[42px] hover:cursor-pointer">수정</button>
          <p>|</p>
          <button className="w-[42px] hover:cursor-pointer">삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
