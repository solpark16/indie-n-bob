"use client";

import SITE_URL from "@/constant";
import { useQuery } from "@tanstack/react-query";
import ConcertSquare from "../ConcertSquare";

function ConcertListView() {
  // TODO 나중에 추론한 데이터로 변경
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
  // console.log(concerts);

  return (
    <>
      <div className="flex justify-end gap-[15px] border-t-[1px] pt-[37px] mb-[74px]">
        <button>최신순</button>
        <button>랭킹순</button>
        <button>공연종료임박순</button>
      </div>
      <ul className="grid grid-cols-3 justify-between gap-[31px]">
        {/** // TODO key 변경 필요 */}
        {concerts.map((concert) => (
          <li key={concert.post_id} className="w-[405px] ">
            <ConcertSquare concert={concert}></ConcertSquare>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ConcertListView;
