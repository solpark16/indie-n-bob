import { PostInDB } from "@/types/Post";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

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
      className="flex flex-col justify-center items-center"
    >
      <div className="relative">
        {/* // TODO 이미지 없을 때 어떻게 보여줄 것인지" */}
        {image && (
          <Image src={image} alt={title} fill className="rounded-2xl" />
        )}
      </div>
      <div className="">
        <span className="font-semibold">{title}</span>
        <span>{"// TODO"}</span>
      </div>
      <div className="text-gray-700">
        <div className="text-sm">{content}</div>
        <div className="text-xs">
          <span>작성자 {nickname}</span>
          <span>{createdAt}</span>
        </div>
      </div>
    </Link>
  );
}

export default PostSqure;
