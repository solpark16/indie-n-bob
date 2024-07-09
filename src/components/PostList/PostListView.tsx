"use client";

import SITE_URL from "@/constant";
import { useQuery } from "@tanstack/react-query";
import PostSqure from "../PostSqure";

function PostListView() {
  // TODO 나중에 추론한 데이터로 변경
  const { data: posts, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(`${SITE_URL}/api/posts`);
      return await response.json();
    },
  });

  if (!isSuccess) {
    return <>로딩중입니다</>;
  }
  console.log(posts);

  return (
    <ol>
      {/** // TODO key 변경 필요 */}
      {posts.map((post) => (
        <li key={post.post_id}>
          <PostSqure post={post}></PostSqure>
        </li>
      ))}
    </ol>
  );
}

export default PostListView;
