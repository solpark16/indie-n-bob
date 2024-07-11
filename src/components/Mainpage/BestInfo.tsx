import SITE_URL from "@/constant";
import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import MainLikes from "./MainLike";

const fetchPosts = async () => {
  const response = await fetch(`${SITE_URL}/api/posts`, {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as Promise<Post[]>;
};

const BestInfo: FC = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src="/loading-circle.gif" alt="Loading" width={50} height={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-5">
      <div className="mb-5 flex justify-between items-center">
        <div>
          <h2 className="text-40px text-[#10AF86]">베스트</h2>
          <p className="text-25px">금주의 베스트 게시글 입니다.</p>
        </div>
        <Link href="/posts" className="no-underline">
          <p className="text-sm text-[#2e2e2e]">더보기 &gt;</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts && posts.length > 0 ? (
          posts.slice(0, 4).map((post) => (
            <Link
              key={post.post_id}
              href={`/posts/${post.post_id}`}
              legacyBehavior
            >
              <a className="relative rounded-lg overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate-2-lines text-main-color">
                    {post.title}
                  </h3>
                  <p className="mt-1 truncate-3-lines text-[#2e2e2e]">
                    {post.content}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-[#2e2e2e]">
                      작성자 {post.author_nickname}
                    </span>
                    <span className="text-sm text-[#2e2e2e]">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <MainLikes postId={post.post_id} />
                  </div>
                </div>
              </a>
            </Link>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default BestInfo;
