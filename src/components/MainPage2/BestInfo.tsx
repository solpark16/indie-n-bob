import SITE_URL from "@/constant";
import useAllLikes from "@/hooks/useAllLikes2"; // 좋아요 데이터 가져오기 훅
import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import MainLikes from "./MainLike";

const fetchPosts = async (page: number, limit: number) => {
  const response = await fetch(
    `${SITE_URL}/api/posts?page=${page}&limit=${limit}`,
    {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const fetchAllPosts = async () => {
  let allPosts: Post[] = [];
  let page = 1;
  const limit = 100;
  let hasMore = true;

  while (hasMore) {
    const data = await fetchPosts(page, limit);
    allPosts = [...allPosts, ...data.posts];
    if (data.posts.length < limit) {
      hasMore = false;
    } else {
      page++;
    }
  }

  return { posts: allPosts };
};

const BestInfo: FC = () => {
  const {
    data: allPostsData,
    error: postsError,
    isLoading: postsLoading,
  } = useQuery({
    queryKey: ["allPosts"],
    queryFn: fetchAllPosts,
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  const {
    data: likesData,
    error: likesError,
    isLoading: likesLoading,
  } = useAllLikes();

  const [topPostsWithLikes, setTopPostsWithLikes] = useState<
    (Post & { likesCount: number })[]
  >([]);

  useEffect(() => {
    if (allPostsData && likesData && Array.isArray(likesData.likes)) {
      console.log("allPostsData", allPostsData);
      console.log("likesData", likesData);

      const postsWithLikes = allPostsData.posts.map((post) => {
        const likesCount = likesData.likes.filter(
          (like: any) => like.post_id === post.post_id
        ).length;
        console.log(`Post ID: ${post.post_id}, Likes Count: ${likesCount}`); // likesCount 확인
        return { ...post, likesCount };
      });

      console.log("postsWithLikes before sorting", postsWithLikes);

      const sortedPosts = postsWithLikes.slice().sort((a, b) => {
        console.log(
          `Comparing ${a.post_id} with ${b.post_id}: ${b.likesCount} - ${a.likesCount}`
        ); // 정렬 비교 확인
        return b.likesCount - a.likesCount;
      });

      console.log("sortedPosts after sorting", sortedPosts);

      setTopPostsWithLikes(sortedPosts.slice(0, 100));
    }
  }, [allPostsData, likesData]);

  if (postsLoading || likesLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src="/loading-circle.gif" alt="Loading" width={50} height={50} />
      </div>
    );
  }

  if (postsError || likesError) {
    return <div>Error: {postsError?.message || likesError?.message}</div>;
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
        {topPostsWithLikes.slice(0, 4).map((post) => {
          const imageSrc = post.image ? post.image : "/concerts-default-image";
          return (
            <Link
              key={post.post_id}
              href={`/posts/${post.post_id}`}
              legacyBehavior
            >
              <a className="relative rounded-lg overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src={imageSrc}
                    alt="공연 정보"
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
          );
        })}
      </div>
    </div>
  );
};

export default BestInfo;
