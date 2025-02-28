"use client";

import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = { postId: number };

function ButtonsChangePostStatus({ postId }: Props) {
  const queryClient = useQueryClient();
  const route = useRouter();

  const handleDeletePost = () => {
    fetch(`/api/posts/${postId}`, { method: "DELETE" })
      .then(() => {
        route.push("/posts");
        queryClient.invalidateQueries({
          queryKey: ["myPosts"],
        });
      })
      .catch(() => {
        alert("삭제 실패: 새로고침 후 재시도 해주세요");
      });
  };

  return (
    <>
      <Link href={`/posts/${postId}/edit`} className="text-main-color mr-4">
        수정
      </Link>
      <button onClick={handleDeletePost} className="text-gray-400 mr-2">
        삭제
      </button>
    </>
  );
}

export default ButtonsChangePostStatus;
