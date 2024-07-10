"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Loading from "@/components/Loading";
import useMyPosts from "@/hooks/useMyPosts";
import Image from "next/image";

const MyPostGalleryView = () => {
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
        <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => (
                <div key={post.post_id} className="p-4 ease-in-out duration-400 transition-transform transform hover:-translate-y-2">
                    <div className="w-52 h-52 relative">
                        <Image
                            src={post.image}
                            alt={post.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-lg mt-3 font-medium truncate">{post.title}</span>
                        <div className="flex mt-3 items-center space-x-2">
                            <span className="text-main-color">❤</span>
                            <span>10</span>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-600 line-clamp-4 min-h-[100px]">{post.content}</p>
                    <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            ))}
            <div ref={ref} />
            {isPending && <Loading />}
        </div>
    );
};

export default MyPostGalleryView;