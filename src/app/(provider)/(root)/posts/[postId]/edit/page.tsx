import SITE_URL from "@/constant";
import { PostInDB } from "@/types/Post";
import moment from "moment";

type PostEditPageProps = {
  params: { postId: number };
};

async function PostEditPage({ params: { postId } }: PostEditPageProps) {
  const response = await fetch(`${SITE_URL}/api/posts/${postId}`);
  const post: PostInDB = await response.json();

  if (!post) {
    // TODO 제대로 된 데이터 없으면 어떻게 처리할 것인지
    return <p>데이터 없음</p>;
  }

  const {
    title,
    content,
    author_nickname: nickname,
    image,
    created_at,
    hashtag: { tags },
  } = post;
  const createdAt = moment(created_at).format("yyyy.MM.DD");

  return <div>EditPostPage</div>;
}

export default PostEditPage;
