"use client";

import { ConcertInDB } from "@/types/Concert";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

// type ConcertSquareProps = {
//   concert: ConcertInDB;
// };

function ConcertSquare({ concert }) {
  const {
    post_id: id,
    title,
    image,
    created_at,
    start_date,
    end_date,
    concert_likes,
  } = concert;

  const createdAt = moment(created_at).format("yyyy.MM.DD");
  const startDate = moment(start_date).format("yyyy.MM.DD");
  const endDate = moment(end_date).format("yyyy.MM.DD");
  return (
    <Link
      href={`/concerts/${id}`}
      className="flex flex-col justify-center items-center text-black no-underline"
    >
      <div className="relative w-full">
        {image && (
          <Image
            src={image}
            alt={title}
            width={405}
            height={405}
            className="relative w-full h-auto rounded-2xl"
          />
        )}
      </div>
      <div className="w-full flex justify-between mt-[20px]">
        <span className="font-semibold text-[25px]">{title}</span>
        <div className="text-xl flex gap-[5px]">
          <span className="text-main-color">♥</span>{" "}
          <span>{concert_likes.length}</span>
        </div>
      </div>
      <div className="text-gray-700 mt-[17px] w-full">
        <div className="text-lg text-start">
          <span>
            공연일시 {startDate}~{endDate}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ConcertSquare;
