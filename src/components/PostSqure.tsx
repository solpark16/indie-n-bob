import { PostInDB } from "@/types/Post";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import defaultImg from "../../public/img-placeholder.svg";
import { HeartIcon } from "./HeartIcon";

type PostSqureProps = {
  post: PostInDB;
};

function PostSqure({ post }: PostSqureProps) {
  const {
    post_id: id,
    title,
    content,
    author_nickname: nickname,
    image,
    created_at,
  } = post;
  const createdAt = moment(created_at).format("yyyy.MM.DD");

  return (
    <Link
      href={`/posts/${id}`}
      className="flex flex-col justify-center items-center px-2"
    >
      <div className="w-full">
        <Image
          src={image ?? defaultImg}
          alt={`이미지: ${title}`}
          className="w-full h-48 rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col mt-4 space-y-2">
        <header className="flex items-center justify-between gap-x-4">
          <h2 className="h-7 text-lg font-semibold text-gray-900 util-ellipsis">
            {title}
          </h2>
          <span className="flex flex-row items-center text-green-600">
            <HeartIcon className="w-4 h-4 mr-1" />
            10
            {/* TODO likes 조인해서 갖고와야 함*/}
          </span>
        </header>
        <p className="text-sm text-gray-600 util-ellipsis">{content}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>작성자 {nickname}</span>
          <span>{createdAt}</span>
        </div>
      </div>
    </Link>
  );
}

export default PostSqure;
