import Image from "next/image";
import React from "react";
import CmtEditBtn from "./modal/CmtEditBtn";
import CmtDelBtn from "./modal/CmtDelBtn";

const Comment = () => {
  return (
    <div className="w-full h-[95px] flex justify-between items-center border-b border-[#dddddd]">
      <div className="w-[1015px] h-[95px] flex justify-start items-center">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="프로필 이미지"
          priority
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <p className="w-[110px] ml-[15px]">병준원영</p>
        <p className="w-[840px]">저도 봤습니다 최곱니다...</p>
      </div>
      <div className="w-[250px] flex justify-end items-center gap-[16px] text-[#A0A0A0]">
        <p>2024.07.08 21:27</p>
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
