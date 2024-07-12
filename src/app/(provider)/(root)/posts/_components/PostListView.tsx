"use client";

import Loading from "@/components/Loading";
import useInfinitePosts from "@/hooks/useInfinitePosts";
import useUserData from "@/hooks/useUserData";
import { Post } from "@/types/Post";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PostItemSqure from "./PostItemSqure";

type PostListViewProps = {
  keyword?: string;
};

function PostListView({ keyword }: PostListViewProps) {
  const { data: userData } = useUserData();
  const { ref, inView: isEndOfPage } = useInView();

  const { posts, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfinitePosts();

  useEffect(() => {
    if (isEndOfPage && hasNextPage) {
      fetchNextPage();
    }
  }, [isEndOfPage, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return "오류로 인하여 데이터를 불러오지 못했습니다. 새로고침 후 다시 시도해주세요";
  }

  const filteredPosts = keyword
    ? posts?.filter((post: Post) => {
        const { hashtag = { tags: [] } } = post;
        return hashtag
          ? hashtag["tags"]?.find((tag: string) => tag === keyword)
          : false;
      })
    : posts;

  if (!filteredPosts?.length) {
    return "검색 결과가 없습니다.";
  }

  return (
    <>
      <div className="relative w-full">
        <div className="absolute left-0 bottom-0">
          {userData && (
            <Link
              className="text-white bg-main-color px-4 py-2 rounded-[10px]"
              href={"/posts/create"}
            >
              <button>글쓰기</button>
            </Link>
          )}
        </div>
      </div>
      <ol className="w-full grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3 p-0">
        {filteredPosts.map((post) => (
          <li key={post.post_id} className="flex flex-col w-full max-w-sm">
            <PostItemSqure post={post}></PostItemSqure>
          </li>
        ))}
      </ol>
      <div ref={ref}></div>
    </>
  );
}

export default PostListView;
