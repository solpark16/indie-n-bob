import BreakLine from "@/components/BreakLine";
import Comments from "@/components/CommentList/Comments";
import Hashtag from "@/components/Hashtag";
import Loading from "@/components/Loading";
import SITE_URL from "@/constant";
import moment from "moment";
import Image from "next/image";
import ButtonsChangePostStatus from "./_components/ButtonsChangePostStatus";

type PostDetailPageProps = {
  params: { postId: number };
};

async function PostDetailPage({ params: { postId } }: PostDetailPageProps) {
  const response = await fetch(`${SITE_URL}/api/posts/${postId}`);
  const post = await response.json();

  if (!post) {
    return <Loading />;
  }

  const {
    title,
    content,
    image,
    created_at,
    hashtag,
    author: { nickname, profile_file: profileImg },
  } = post;
  const createdAt = moment(created_at).format("yyyy.MM.DD");

  const isOwnedUser: boolean = true; // TODO 로그인한 사용자 아이디 === author_id 체크 필요

  return (
    <main className="py-8">
      <div className="flex flex-row items-center gap-x-3">
        <Image
          src={profileImg ?? "/user/fallback-avatar.svg"}
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
      <div className="py-10">
        {image && (
          <Image
            src={image}
            alt="사용자 첨부 이미지"
            width="300"
            height="300"
            className="max-w-full max-h-full rounded-xl"
          />
        )}
        <div className="py-10">{content}</div>
      </div>
      <div className="pt-18 pb-4">
        <Hashtag tags={hashtag?.tags} size="sm" />
      </div>
      <BreakLine />
      <Comments postId={postId} />
    </main>
  );
}

export default PostDetailPage;
