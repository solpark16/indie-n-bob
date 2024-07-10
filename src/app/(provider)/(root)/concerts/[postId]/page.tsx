import ConcertDeleteButton from "@/components/ConcertList/ConcertDeleteButton";
import Hashtag from "@/components/Hashtag";
import SITE_URL from "@/constant";
import { ConcertInDB } from "@/types/Concert";
import { PostInDB } from "@/types/Post";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type ConcertDetailPageProps = {
  params: { postId: number };
};

async function ConcertDetailPage({
  params: { postId },
}: ConcertDetailPageProps) {
  const response = await fetch(`${SITE_URL}/api/concerts/${postId}`);
  const concert: ConcertInDB = await response.json();

  const {
    post_id: id,
    title,
    content,
    image,
    created_at,
    start_date,
    end_date,
    time,
    price,
    age,
    link,
    users: { nickname, profile_image },
  } = concert;

  const createdAt = moment(created_at).format("yyyy.MM.DD");
  const startDate = moment(start_date).format("yyyy.MM.DD");
  const endDate = moment(end_date).format("yyyy.MM.DD");

  return (
    <main>
      <div className="px-[92px]">
        <header className="mb-[22px]">
          <div>
            <>
              <h2 className="text-[45px] mb-[10px]">{title}</h2>
              <p className="text-[25px] text-[#747474]">100</p>
            </>
            <Link href={`/concerts/${postId}/edit`}>
              <button>수정</button>
            </Link>
            <ConcertDeleteButton postId={postId} />
          </div>
        </header>
        <article
          className="flex gap-[76px]"
          style={{ border: "1px solid red" }}
        >
          <div className="relative min-w-[450px] w-[450px]">
            {/* Image 태그로 변경 필요 */}
            {image && <img src={image} alt={title} />}
          </div>
          <div
            className="w-full flex flex-col text-[#2E2E2E]"
            style={{ border: "1px solid red" }}
          >
            <div className="mt-[30px] leading-[60px]">
              <div className="flex text-[25px]">
                <p className="w-[135px]">장소</p>
                <p>소극장</p>
              </div>
              <div className="flex text-[25px]">
                <p className="w-[135px]">공연기간</p>
                <p>
                  {startDate}~{endDate}
                </p>
              </div>
              <div className="flex text-[25px]">
                <p className="w-[135px]">공연시간</p>
                <p>{time}분</p>
              </div>
              <div className="flex text-[25px]">
                <p className="w-[135px]">관람연령</p>
                <p>{age}</p>
              </div>
              <div className="flex text-[25px]">
                <p className="w-[135px]">가격</p>
                <p>{price}</p>
              </div>
            </div>
            <button className="w-full h-[67px] mt-auto bg-[#10AF86] text-white rounded-[10px]">
              자세히보기
            </button>
          </div>
        </article>
        <div>
          <div className="text-[18px] flex justify-between mt-[78px] mb-[35px] pb-[24px] border-b-[1px]">
            <div className="flex">
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src={profile_image}
              />
              <p>{nickname}</p>
            </div>
            {/* TODO 시간 가져오기 */}
            <p className="text-[#A0A0A0]">{createdAt}</p>
          </div>
          <p className="text-[25px]">{content}</p>
        </div>
      </div>
    </main>
  );
}

export default ConcertDetailPage;
