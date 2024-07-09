import Image from "next/image";
import React from "react";

const CmtToDel = ({ onClose }: { onClose: () => void }) => {
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
          <p className="w-[110px] ml-[15px] text-black">애기맨</p>
        </div>
        <div className="w-[250px] flex justify-end items-center gap-[16px] text-[#A0A0A0]">
          <p>2024.07.08 21:27</p>
        </div>
      </div>
      <p className="w-[850px] h-[25px] text-black text-[20px] mt-[20px]">
        저요 저요 저 아니면 안 돼요 저 꼭 잔나비 봐야해요
      </p>
      <div className="flex gap-[20px] pt-[70px] pl-[475px]">
        <button
          type="button"
          className="w-[200px] h-[55px] rounded-[10px] bg-[#EFEFEF] text-[#747474] hover:bg-[#d7d7d7] transition duration-200"
          onClick={onClose}
        >
          취소
        </button>
        <button
          type="button"
          className="w-[200px] h-[55px] rounded-[10px] bg-[#10AF86] text-white hover:bg-[#0e9a77] transition duration-200"
        >
          확인
        </button>
      </div>
    </>
  );
};

export default CmtToDel;
