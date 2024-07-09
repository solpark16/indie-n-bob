import { ConcertInDB } from "@/types/Concert";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type ConcertSquareProps = {
  concert: ConcertInDB;
};

function ConcertSquare({ concert }: ConcertSquareProps) {
  const {
    post_id: id,
    title,
    content,
    author_nickname: nickname,
    image,
    created_at,
    start_date,
    end_date,
    time,
  } = concert;
  const createdAt = moment(created_at).format("yyyy.MM.DD");
  const startDate = moment(start_date).format("yyyy.MM.DD");
  const endDate = moment(end_date).format("yyyy.MM.DD");
  return (
    <Link
      href={`/concerts/${id}`}
      className="flex flex-col justify-center items-center"
    >
      <div className="relative">
        {/* // TODO 이미지 없을 때 어떻게 보여줄 것인지" */}
        {image && (
          <img src={image} alt={title} />
          // TODO Image 태그 쓸 수 있도록 만들기
          // <Image src={image} alt={title} fill className="rounded-2xl" />
        )}
      </div>
      <div className="w-full flex justify-between mt-[20px]">
        <span className="font-semibold text-[25px]">{title}</span>
        {/* 하트 이미지 및 like 가져와야함 */}
        <span>100</span>
      </div>
      <div className="text-gray-700 mt-[17px] w-full">
        <div className="text-xs text-start">
          <span>
            공연일시 {startDate}~{endDate}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ConcertSquare;
