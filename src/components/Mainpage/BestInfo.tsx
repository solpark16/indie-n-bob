import { FC } from "react";
import Link from "next/link";

const PerformanceInfo: FC = () => {
  return (
    <div className="p-5">
      <div className="mb-5 flex justify-between items-center">
        <div>
          <h2 className="text-40px text-[#10AF86]">베스트</h2>
          <p className="text-25px">금주의 베스트 게시글 입니다.</p>
        </div>
        <Link href="/more">
          <p className="text-gray-500 text-sm">더보기 &gt;</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden h-70">
            <img
              src="/logo.png"
              className="w-full h- object-cover"
              alt={`Image ${index + 1}`}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                와 ;; 오늘 홍대 실리카겔 버스킹 쩔었다 ;;
              </h3>
              <p className="text-gray-600 mt-1">
                실리카겔 버스킹 보신 분 있나요? 진짜 개 쩔었습니다 ;;...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 text-sm">작성자 재훈재훈</span>
                <span className="text-gray-500 text-sm">2024.07.08</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-green-600 text-sm">♥ 10</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceInfo;
