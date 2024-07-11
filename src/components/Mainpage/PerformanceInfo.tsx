import { FC } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import SITE_URL from "@/constant";

const PerformanceInfo: FC = () => {
  const { data: concerts, isSuccess } = useQuery({
    queryKey: ["concerts"],
    queryFn: async () => {
      const response = await fetch(`${SITE_URL}/api/concerts`);
      return await response.json();
    },
  });

  if (!isSuccess) {
    return <>로딩중입니다</>;
  }

  return (
    <div className="text-center p-5">
      <div className="mb-5">
        <h2 className="text-40px text-[#10AF86] text-left">공연정보</h2>
        <div className="flex justify-between items-center">
          <p className="text-25px text-left">이번 달 공연정보 입니다.</p>
          <Link href="/concerts" legacyBehavior>
            <p className="text-gray-500 text-sm cursor-pointer">더보기 &gt;</p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {concerts.map((concert) => (
          <div
            key={concert.post_id}
            className="relative w-80 h-80 lg:w-80 lg:h-80 sm:w-50 sm:h-50 rounded-full overflow-hidden group cursor-pointer transition duration-200"
          >
            <Image
              src={concert.image}
              alt={`Performance ${concert.post_id}`}
              fill
              style={{ objectFit: "cover" }}
              className="transition z-1"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center text-[#ffffff00] bg-opacity-0 hover:text-[white] hover:bg-[#00000076]">
              <p className="text-xl">{concert.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceInfo;
