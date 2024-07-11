"use client";

import Loading from "@/components/Loading";
import SITE_URL from "@/constant";
import { PostWithAuthor } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import PostItemSqure from "./PostItemSqure";

type PostListViewProps = {
  keyword?: string;
};

function PostListView({ keyword }: PostListViewProps) {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<PostWithAuthor[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(`${SITE_URL}/api/posts`);
      return await response.json();
    },
  });

  // TODO 무한 스크롤 기능 구현 필요

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return "오류로 인하여 데이터를 불러오지 못했습니다. 새로고침 후 다시 시도해주세요";
  }

  const filteredPosts = keyword
    ? posts?.filter((post) =>
        post.hashtag["tags"].find((tag: string) => tag === keyword)
      )
    : posts;

  // TODO filteredPosts.length === 0 일 때 처리 필요
  if (!filteredPosts) {
    return "검색 결과가 없습니다.";
  }

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
