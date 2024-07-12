"use client";

import SITE_URL from "@/constant";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { setTimeout } from "timers";

type Props = {
  postId: number;
};

function LikeButton({ postId }: Props) {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const { mutateAsync: likePost } = useMutation({
    mutationFn: () => axios.post(`${SITE_URL}/api/posts/${postId}/likes`),
  });
  const { mutateAsync: unlikePost } = useMutation({
    mutationFn: () => axios.delete(`${SITE_URL}/api/posts/${postId}/likes`),
  });

  const handleOnClick = () => {
    console.log("isLike", isLike, `isRunning : ${isRunning}`);
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    setTimeout(() => {
      isLike ? likePost() : unlikePost();
      setIsLike(!isLike);
      setIsRunning(false);
    }, 1000);
  };

  return (
    <button onClick={handleOnClick} className="text-main-color text-2xl">
      {isLike ? "♥" : "♡"}
    </button>
  );
}

export default LikeButton;
