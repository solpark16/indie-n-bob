import { FC } from "react";
import Link from "next/link";

const performances = [
  {
    id: 1,
    imageUrl: "/실리카겔 커버.jpg",
    text: "Performance 1",
  },
  { id: 2, imageUrl: "/logo.png", text: "Performance 2" },
  { id: 3, imageUrl: "/logo.png", text: "Performance 3" },
];

const PerformanceInfo: FC = () => {
  return (
    <div className="text-center p-5">
      <div className="mb-5">
        <h2 className="text-40px text-[#10AF86] text-left">공연정보</h2>
        <div className="flex justify-between items-center">
          <p className="text-25px text-left">이번 달 공연정보 입니다.</p>
          <Link href="/more" legacyBehavior>
            <p className="text-gray-500 text-sm">더보기 &gt;</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        {performances.map((performance) => (
          <div
            key={performance.id}
            className="relative w-80 h-80 rounded-full overflow-hidden group"
          >
            <img
              src={performance.imageUrl}
              alt={`Performance ${performance.id}`}
              className="w-full h-full object-cover transition z-1 "
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center text-[#ffffff00] bg-opacity-0 hover:text-[white] hover:bg-[#00000076]">
              <p className="text-xl">{performance.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceInfo;
