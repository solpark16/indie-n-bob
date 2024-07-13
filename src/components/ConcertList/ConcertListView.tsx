"use client";

import SITE_URL from "@/constant";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import getConcerts from "@/utils/getConcerts";
import { useInView } from "react-intersection-observer";
import Loading from "../Loading";
import { User } from "@supabase/supabase-js";
import { useAlertStore } from "@/zustand/alert.store";
import { AlertUi } from "../Alert";
import ConcertSquare from "./ConcertSquare";
import { Concert, ConcertInDB } from "@/types/Concert";

function ConcertListView() {
  const [user, setUser] = useState<User>();
  const [sortedConcerts, setSortedConcerts] = useState<any[]>([]);
  const [activeSort, setActiveSort] = useState("latest");
  const { setAlert } = useAlertStore();

  // TODO 나중에 추론한 데이터로 변경
  const { data, isPending, isError, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["concerts", activeSort],
      queryFn: async ({ pageParam = 0 }) => getConcerts(pageParam, activeSort),
      getNextPageParam: (lastPage) => {
        return lastPage?.nextCursor !== null ? lastPage?.nextCursor : undefined;
      },
      initialPageParam: 0,
      staleTime: Infinity,
    });

  const concerts = useMemo(
    () => data?.pages?.flatMap((page) => page?.posts) || [],
    [data]
  );

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // 현재 로그인 된 유저 정보 가져오기
  useEffect(() => {
    const supabase = createClient();
    const fetchData = async () => {
      const { data, error: getUserError } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user);
      }
    };
    fetchData();
  }, []);

  // sort 기능
  // 최신순 정렬
  const latestSort = () => {
    setActiveSort("latest");
    refetch();
  };

  // // 랭킹순 정렬
  const rankingSort = () => {
    setActiveSort("ranking");
    refetch();
  };

  // // 공연 종료 임박순 정렬
  const imminentSort = () => {
    setActiveSort("imminent");
    refetch();
  };

  if (isPending) return <Loading />;
  return (
    <>
      <div className="flex border-t-[1px] py-[37px] justify-between">
        {user && user.user_metadata.is_admin ? (
          <Link
            className="text-white bg-main-color p-[15px] rounded-[10px]"
            href={"/concerts/write"}
          >
            <button>공연 등록하기</button>
          </Link>
        ) : (
          <>
            <button
              onClick={() => {
                //alert("공연 정보는 관리자만 등록할 수 있습니다.");
                setAlert(
                  true,
                  `Wait! ✋`,
                  "공연 정보는 관리자만 등록할 수 있습니다."
                );
              }}
              className="text-gray-600 bg-[#E3E3E3] p-[15px] rounded-[10px]"
            >
              공연 등록하기
            </button>
            <AlertUi />
          </>
        )}

        <div className="flex justify-end gap-[15px]">
          <button
            onClick={latestSort}
            className={`${
              activeSort === "latest" ? "text-main-color font-bold" : ""
            }`}
          >
            최신순
          </button>
          <button
            onClick={rankingSort}
            className={`${
              activeSort === "ranking" ? "text-main-color font-bold" : ""
            }`}
          >
            랭킹순
          </button>
          <button
            onClick={imminentSort}
            className={`${
              activeSort === "imminent" ? "text-main-color font-bold" : ""
            }`}
          >
            공연종료임박순
          </button>
        </div>
      </div>

      {/** // TODO key 변경 필요 */}
      {concerts && concerts.length ? (
        <ul className="grid justify-between gap-[31px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0">
          {concerts.map((concert) => (
            <li key={concert.post_id} className="max-w-[405px]">
              <ConcertSquare concert={concert}></ConcertSquare>
            </li>
          ))}
        </ul>
      ) : (
        <div>등록된 공연 정보가 없습니다.</div>
      )}
      <div ref={ref}></div>
      {isPending && <Loading />}
    </>
  );
}

export default ConcertListView;
