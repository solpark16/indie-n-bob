"use client";

import SITE_URL from "@/constant";
import { useQuery } from "@tanstack/react-query";
import ConcertSquare from "../ConcertSquare";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

function ConcertListView() {
  const [user, setUser] = useState(null);
  const [sortedConcerts, setSortedConcerts] = useState([]);
  const [activeSort, setActiveSort] = useState("latest");
  // TODO 나중에 추론한 데이터로 변경
  const { data: concerts, isSuccess } = useQuery({
    queryKey: ["concerts"],
    queryFn: async () => {
      const response = await fetch(`${SITE_URL}/api/concerts`);
      return await response.json();
    },
  });
  console.log(concerts);

  // 현재 로그인 된 유저 정보 가져오기
  useEffect(() => {
    const supabase = createClient();
    const fetchData = async () => {
      const { data, error: getUserError } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchData();
  }, []);

  // 최신 순으로 정렬
  useEffect(() => {
    if (concerts && concerts.length) {
      latestSort();
    }
  }, [concerts]);

  // sort 기능
  // 최신순 정렬
  const latestSort = () => {
    setActiveSort("latest");
    const sorted = [...concerts].sort((a, b) => {
      console.log(Date.parse(a.created_at), Date.parse(b.created_at));
      return Date.parse(b.created_at) - Date.parse(a.created_at);
    });
    setSortedConcerts(sorted);
  };

  // 랭킹순 정렬
  const rankingSort = () => {
    setActiveSort("ranking");
    // 정렬 로직 추가
  };

  // 공연 종료 임박순 정렬
  const imminentSort = () => {
    setActiveSort("imminent");
    const now = new Date().getTime();
    const sorted = [...concerts].sort((a, b) => {
      const diffA = new Date(a.end_date).getTime() - now;
      const diffB = new Date(b.end_date).getTime() - now;
      return diffA - diffB;
    });
    setSortedConcerts(sorted);
  };

  if (!isSuccess) {
    return <>로딩중입니다</>;
  }
  console.log(concerts);
  return (
    <>
      <div className="flex border-t-[1px] pt-[37px] mb-[74px] justify-between">
        {user && user.user_metadata.is_admin ? (
          <Link
            className="text-white bg-main-color p-[15px] rounded-[10px]"
            href={"/concerts/write"}
          >
            <button>공연 등록하기</button>
          </Link>
        ) : (
          <button
            onClick={() => {
              alert("공연 정보는 관리자만 등록할 수 있습니다.");
            }}
            className="text-gray-600 bg-[#E3E3E3] p-[15px] rounded-[10px]"
          >
            공연 등록하기
          </button>
        )}

        <div className="flex justify-end gap-[15px]">
          <button
            onClick={latestSort}
            className={`${activeSort === "latest" ? "text-blue-600" : ""}`}
          >
            최신순
          </button>
          {/* <button
            onClick={rankingSort}
            className={`${activeSort === "ranking" ? "text-blue-600" : ""}`}
          >
            랭킹순
          </button> */}
          <button
            onClick={imminentSort}
            className={`${activeSort === "imminent" ? "text-blue-600" : ""}`}
          >
            공연종료임박순
          </button>
        </div>
      </div>

      {/** // TODO key 변경 필요 */}
      {concerts && concerts.length ? (
        <ul className="grid grid-cols-3 justify-between gap-[31px]">
          {sortedConcerts.map((concert) => (
            <li key={concert.post_id} className="max-w-[405px] ">
              <ConcertSquare concert={concert}></ConcertSquare>
            </li>
          ))}
        </ul>
      ) : (
        <div>등록된 공연 정보가 없습니다.</div>
      )}
    </>
  );
}

export default ConcertListView;
