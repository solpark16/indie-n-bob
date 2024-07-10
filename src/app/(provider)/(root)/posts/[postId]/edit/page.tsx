import BreakLine from "@/components/BreakLine";
import Hashtag from "@/components/Hashtag";
import SITE_URL from "@/constant";
import { PostInDB } from "@/types/Post";
import Image from "next/image";

type EditPostPageProps = {
  params: { postId: number };
};

async function EditPostPage({ params: { postId } }: EditPostPageProps) {
  const response = await fetch(`${SITE_URL}/api/posts/${postId}`);
  const post: PostInDB = await response.json();

  // TODO 본인 외에 다른 사람이 수정하러 들어오면 튕겨내기

  if (!post) {
    // TODO 제대로 된 데이터 없으면 어떻게 처리할 것인지
    return <p>데이터 없음 : {postId}</p>;
  }

  const { title, content, image, hashtag } = post;

  return (
    <main className="py-8">
      <h2 className="hidden">게시물 수정</h2>
      <h2 className="py-6 text-3xl font-bold">{title}</h2>
      <BreakLine />
      <div className="py-10">
        <span>
          {image && (
            <Image
              src={image}
              alt="사용자 첨부 이미지"
              width="300"
              height="300"
              className="max-w-full max-h-full rounded-xl"
            />
          )}
        </span>
        <p className="py-10">{content}</p>
      </div>
      <div className="pt-18 pb-4">
        <Hashtag tags={hashtag?.tags} size="sm" />
      </div>
      <BreakLine />
    </main>
  );
}

export default EditPostPage;
