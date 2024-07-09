import Image from "next/image";
import React from "react";
import ContentInput from "./ContentInput";

const CmtToModi = () => {
  return (
    <>
      <div className="w-[900px] h-[80px] flex justify-between items-center border-t border-b border-[#dddddd] text-[18px]">
        <div className="w-[850px] h-[80px] flex justify-start items-center">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="프로필 이미지"
            priority
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <p className="w-[110px] ml-[15px]  text-black">병준원영</p>
        </div>
        <div className="w-[250px] flex justify-end items-center gap-[16px] text-[#A0A0A0]">
          <p>2024.07.08 21:27</p>
        </div>
      </div>
      <ContentInput />
    </>
  );
};

export default CmtToModi;
