"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Loading from "@/components/Loading";
import useMyPosts from "@/hooks/useMyPosts";
import Image from "next/image";

const MyPostListView = () => {
  const { data, isPending, isError, fetchNextPage, hasNextPage } = useMyPosts();
  const posts = data?.pages?.flatMap(page => page.posts);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (!posts || posts.length === 0) {
    return <div>게시글을 불러올 수 없습니다.</div>;
  }

  if (isPending) return <Loading />;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.post_id} className="flex items-start space-x-4 p-4 ease-in-out duration-400 transition-transform transform hover:-translate-y-2">
          <Image
            src={post.image}
            alt={post.title}
            width={52}
            height={32}
            className="w-52 h-32 rounded-2xl"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium truncate">{post.title}</span>
              <span className="text-gray-500 text-sm">{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <div className="mt-2 h-16 text-gray-600">
              <p className="line-clamp-3">{post.content}</p>
            </div>
            <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
              <span className="text-main-color">❤</span>
              <span>10</span>
            </div>
          </div>
        </div>
      ))}
      <div ref={ref} />
      {isPending && <Loading />}
    </div>
  );
};

export default MyPostListView;