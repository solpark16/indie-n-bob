"use client";

import Loading from "@/components/Loading";
import SITE_URL from "@/constant";
import { PostInDB } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import PostItemSqure from "./PostItemSqure";

type PostListViewProps = {
  keyword: string;
};

function PostListView({ keyword }: PostListViewProps) {
  // TODO 나중에 추론한 데이터로 변경
  const { data: posts, isLoading } = useQuery<PostInDB[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(`${SITE_URL}/api/posts`);
      return await response.json();
    },
  });

  // TODO 무한 스크롤 기능 구현 필요

  if (isLoading) {
    return <Loading />;
  }

  const filteredPosts = keyword
    ? posts.filter((post) => {
        const { tags } = post.hashtag;
        return tags.find((tag) => tag === keyword);
      })
    : posts;

  // TODO filteredPosts.length === 0 일 때 처리 필요

  return (
    <ol className="w-full grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map((post) => (
        <li key={post.post_id} className="flex flex-col w-full max-w-sm p-4">
          <PostItemSqure post={post}></PostItemSqure>
        </li>
      ))}
    </ol>
  );
}

export default PostListView;
