import React from "react";
import { PostInDB } from "@/types/Post";
import Image from "next/image";

type PostSquareProps = {
  post: PostInDB;
};

const BestInfoSquare: React.FC<PostSquareProps> = ({ post }) => {
  const {
    post_id: id,
    title,
    content,
    author_nickname: nickname,
    image,
    likes,
  } = post;

  return (
    <div key={id} className="relative rounded-lg overflow-hidden h-70">
      <Image
        src={image ?? "/post/fallback.svg"}
        fill
        alt={`이미지: ${title}`}
        className="w-full h-48 rounded-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{content}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500 text-sm">작성자 {nickname}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 text-sm">♥ {likes ?? 0}</span>
        </div>
      </div>
    </div>
  );
};

export default BestInfoSquare;
