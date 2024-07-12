"use client";

import SITE_URL from "@/constant";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";

type Props = {
  postId: number;
};

function LikeButton({ postId }: Props) {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const { data: result } = useQuery({
    queryKey: ["likes", { method: "GET", postId }],
    queryFn: () => axios.get(`${SITE_URL}/api/posts/${postId}/likes`),
  });

  useEffect(() => {
    if (!result) return;
    const { data: myLike } = result;
    setIsLike(myLike.isLiked);
  }, [result]);

  const { mutateAsync: likePost } = useMutation({
    mutationKey: ["likes", { method: "POST", postId }],
    mutationFn: () => axios.post(`${SITE_URL}/api/posts/${postId}/likes`),
  });
  const { mutateAsync: unlikePost } = useMutation({
    mutationKey: ["likes", { method: "DELETE", postId }],
    mutationFn: () => axios.delete(`${SITE_URL}/api/posts/${postId}/likes`),
  });

  const handleOnClick = () => {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    setTimeout(() => {
      isLike ? unlikePost() : likePost();
      setIsLike(!isLike);
      setIsRunning(false);
    }, 500);
  };

  return (
    <button onClick={handleOnClick} className="text-main-color text-2xl">
      {isLike ? "♥" : "♡"}
    </button>
  );
}

export default LikeButton;
