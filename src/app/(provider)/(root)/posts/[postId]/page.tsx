import BreakLine from "@/components/BreakLine";
import Hashtag from "@/components/Hashtag";
import SITE_URL from "@/constant";
import { PostInDB } from "@/types/Post";
import moment from "moment";
import Image from "next/image";
import ButtonsChangePostStatus from "./edit/_components/ButtonsChangePostStatus";

type PostDetailPageProps = {
  params: { postId: number };
};

async function PostDetailPage({ params: { postId } }: PostDetailPageProps) {
  const response = await fetch(`${SITE_URL}/api/posts/${postId}`);
  const post: PostInDB = await response.json();

  console.log(post);

  const {
    title,
    content,
    author_id,
    author_nickname: nickname,
    image,
    created_at,
    hashtag,
  } = post;
  const createdAt = moment(created_at).format("yyyy.MM.DD");

  // TODO 제대로 된 데이터 없으면 어떻게 처리할 것인지

  const isOwnedUser: boolean = true; // TODO 로그인한 사용자 아이디 === author_id 체크 필요

  return (
    <main className="py-8">
      <div className="flex flex-row items-center gap-x-3">
        {/* {// TODO 글쓴이의 프로필 정보도 조인해서 가져와야 해} */}
        <Image
          src="/user/fallback-avatar.svg"
          alt="프로필 이미지"
          width="45"
          height="45"
        />
        <span className="text-lg font-semibold">{nickname}</span>
        <div className={`ml-auto ${!isOwnedUser && "hidden"}`}>
          <ButtonsChangePostStatus postId={postId} />
        </div>
      </div>
      <h2 className="py-6 text-3xl font-bold">{title}</h2>
      <div className="pb-4 text-gray-400">작성일자 {createdAt}</div>
      <BreakLine />
      <p className="py-10">
        {image && (
          <Image
            src={image}
            alt="사용자 첨부 이미지"
            width="300"
            height="300"
            className="max-w-full max-h-full rounded-xl"
          />
        )}
        <span className="py-10">{content}</span>
      </p>
      <div className="pt-18 pb-4">
        <Hashtag tags={hashtag?.tags} size="sm" />
      </div>
      <BreakLine />
    </main>
  );
}

export default PostDetailPage;
