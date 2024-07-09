import Button from "@/components/Button";
import Hashtag from "@/components/Hashtag";
import SITE_URL from "@/constant";
import { PostInDB } from "@/types/Post";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type PostDetailPageProps = {
  params: { postId: number };
};

async function PostDetailPage({ params: { postId } }: PostDetailPageProps) {
  const response = await fetch(`${SITE_URL}/api/posts/${postId}`);
  const post: PostInDB = await response.json();

  const {
    title,
    content,
    author_nickname: nickname,
    image,
    created_at,
    hashtag: { tags },
  } = post;
  const createdAt = moment(created_at).format("yyyy.MM.DD");

  return (
    <main>
      <header>
        {/* {// TODO 글쓴이의 프로필 정보도 조인해서 가져와야 해} */}
        <div>{nickname}</div>
        <div>
          <h2>{title}</h2>
          <Link href={`/posts/${postId}/edit`}>
            <button>수정</button>
          </Link>
          <Button>삭제</Button>
        </div>
      </header>
      <article>
        <div className="relative">
          {image && <Image src={image} alt={title} fill />}
        </div>
        <div>{content}</div>
        <div>
          <Hashtag tags={tags} />
        </div>
      </article>
    </main>
  );
}

export default PostDetailPage;
