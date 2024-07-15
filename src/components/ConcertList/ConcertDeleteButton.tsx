"use client";

import { createClient } from "@/utils/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const ConcertDeleteButton = ({ postId }: { postId: string }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const concertDeleteHandler = async () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      const supabase = createClient();
      await supabase.from("concert_posts").delete().eq("post_id", postId);
      queryClient.invalidateQueries({
        queryKey: ["concerts"],
      });
      router.push("/concerts");
    }
  };

  return (
    <button
      className="bg-main-color text-white p-[10px] rounded-[10px] h-fit"
      onClick={concertDeleteHandler}
    >
      삭제
    </button>
  );
};

export default ConcertDeleteButton;
