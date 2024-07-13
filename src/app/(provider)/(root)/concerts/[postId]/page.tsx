"use client";

import ConcertDeleteButton from "@/components/ConcertList/ConcertDeleteButton";
import { Concert, ConcertInDB } from "@/types/Concert";
import { formatDateString } from "@/utils/formatDateString";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ConcertDetailPageProps = {
  params: { postId: string };
};

const ConcertDetailPage = ({ params: { postId } }: ConcertDetailPageProps) => {
  const [user, setUser] = useState<User>();
  const [like, setLike] = useState(0);
  const [heart, setHeart] = useState(false);

  const queryClient = useQueryClient();
  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error: getUserError } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user);
      }
    };
    fetchData();
  }, []);

  // like 가져오기
  useEffect(() => {
    const fetchLike = async () => {
      const { data, error } = await supabase
        .from("concert_likes")
        .select()
        .eq("post_id", postId);
      if (data) {
        setLike(data.length);
      }
      const isUserLiked = data?.filter((like) => {
        return like.user_id === user?.id;
      });
      if (isUserLiked?.length) {
        setHeart(true);
      } else {
        setHeart(false);
      }
    };
    fetchLike();
  }, [like]);

  const { data: concert, isPending } = useQuery({
    queryKey: ["concerts", postId],
    queryFn: async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("concert_posts")
        .select("*, users:author_id(nickname, profile_image)")
        .eq("post_id", postId)
        .single();

      return data as any;
    },
  });

  if (isPending || !concert) {
    return <div>로딩 중입니다...</div>;
  }
  const {
    post_id: id,
    title,
    content,
    image,
    created_at,
    start_date,
    end_date,
    time,
    region,
    price,
    age,
    link,
    author_id,
    // users: { nickname, profile_image },
    users,
  } = concert;

  const createdAt = moment(created_at).format("yyyy.MM.DD");
  const startDate = moment(start_date).format("yyyy.MM.DD");
  const endDate = moment(end_date).format("yyyy.MM.DD");

  const onClickLikeHandler = async () => {
    if (!user) {
      alert("로그인한 사용자만 가능합니다.");
      return;
    }
    const newLike = {
      like_id: uuidv4(),
      post_id: postId,
      user_id: user.id,
    };
    const supabase = createClient();
    const { data, error } = await supabase
      .from("concert_likes")
      .select()
      .eq("post_id", postId)
      .eq("user_id", user.id);
    if (data && data.length) {
      await supabase
        .from("concert_likes")
        .delete()
        .eq("post_id", postId)
        .eq("user_id", user.id);
      setHeart(false);
      setLike(like - 1);
    } else {
      await supabase.from("concert_likes").insert(newLike).select();
      setHeart(true);
      setLike(like + 1);
    }
    queryClient.invalidateQueries({
      queryKey: ["concerts"],
    });
  };

  return (
    <main>
      <div className="px-[92px] mt-[140px]">
        <header className="mb-[22px]">
          <div>
            <>
              <h2 className="text-[45px] mb-[10px]">{title}</h2>
              <div className="flex justify-between">
                <p
                  className="text-[25px] text-[#747474] cursor-pointer"
                  onClick={onClickLikeHandler}
                >
                  {heart ? (
                    <span className="text-main-color">♥</span>
                  ) : (
                    <span className="text-[#E3E3E3]">♥</span>
                  )}{" "}
                  {like}
                  {/* <span className="text-main-color">♥</span> {like} */}
                </p>
                {user && author_id === user.id && (
                  <div className="flex gap-[10px]">
                    <Link href={`/concerts/${postId}/edit`}>
                      <button className="bg-main-color text-white p-[10px] rounded-[10px]">
                        수정
                      </button>
                    </Link>
                    <ConcertDeleteButton postId={postId} />
                  </div>
                )}
              </div>
            </>
          </div>
        </header>
        <article className="flex gap-[76px]">
          <div className="relative min-w-[450px] w-[450px]">
            {/* Image 태그로 변경 필요 */}
            {image && (
              <Image
                src={image}
                alt="공연 포스터 이미지"
                width={450}
                height={450}
              />
            )}
          </div>
          <div className="w-full flex flex-col text-[#2E2E2E]">
            <div className="mt-[30px] leading-[60px]">
              <div className="flex text-[25px]">
                <p className="min-w-[135px]">장소</p>
                <p>{region}</p>
              </div>
              <div className="flex text-[25px]">
                <p className="min-w-[135px]">공연기간</p>
                <p>
                  {startDate}~{endDate}
                </p>
              </div>
              <div className="flex text-[25px]">
                <p className="min-w-[135px]">공연시간</p>
                <p>{time}분</p>
              </div>
              <div className="flex text-[25px]">
                <p className="min-w-[135px]">관람연령</p>
                <p>{age}</p>
              </div>
              <div className="flex text-[25px]">
                <p className="min-w-[135px]">가격</p>
                <p>{price}</p>
              </div>
            </div>
            {link && (
              <Link href={link}>
                <button className="w-full h-[67px] mt-auto bg-[#10AF86] text-white rounded-[10px]">
                  자세히보기
                </button>
              </Link>
            )}
          </div>
        </article>
        <div>
          <div className="text-[18px] flex justify-between mt-[78px] mb-[35px] pb-[24px] border-b-[1px]">
            <div className="flex gap-4 items-center">
              <Image
                alt="프로필 사진"
                width={50}
                height={50}
                className="h-[50px] object-cover rounded-full"
                src={users && users.profile_image}
              />
              <p className="m-0">{users && users.nickname}</p>
            </div>
            <p className="text-[#A0A0A0]">{formatDateString(created_at)}</p>
          </div>
          <p className="text-[25px] mb-[300px]">{content}</p>
        </div>
      </div>
    </main>
  );
};

export default ConcertDetailPage;
