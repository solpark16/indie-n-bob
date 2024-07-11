import Image from "next/image";
import React from "react";
import CmtToDel from "./CmtToDel";
import { CommentType } from "@/types/Comments";

interface PropsType {
  comment: CommentType;
  onClose: () => void;
}

const CmtDelModal = ({ comment, onClose }: PropsType) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[1000px] h-[500px] bg-white rounded-[30px] shadow-modal-custom">
          <div className="w-[1000px] h-[65px] flex justify-end items-center rounded-tl-[30px] rounded-tr-[30px] bg-[#10AF86]">
            <Image
              src="/cancel.png"
              width={50}
              height={50}
              alt="취소"
              className="w-[50px] h-[50px] mr-[10px] hover:cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="w-[900px] mt-[30px] font-semibold text-[#10AF86] text-[30px]">
              댓글을 삭제하시겠어요?
            </h2>
            <p className="w-[900px] mt-[10px] mb-[30px] font-semibold text-[#747474] text-[20px]">
              댓글은 영구적으로 삭제되며, 복구할 수 없습니다.
            </p>
            <CmtToDel comment={comment} onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CmtDelModal;
