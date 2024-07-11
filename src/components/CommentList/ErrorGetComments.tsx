import Image from "next/image";
import React from "react";
import loadingGif from "../../../public/loading-circle.gif";

const ErrorGetComments = () => {
  return (
    <div>
      <p className="relative top-52 w-auto h-auto text-lg">
        댓글 조회 중 오류가 발생했습니다.
      </p>
    </div>
  );
};

export default ErrorGetComments;
