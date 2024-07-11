"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React from "react";

const ConcertDeleteButton = ({ postId }: { postId: string }) => {
  const router = useRouter();

  const concertDeleteHandler = async () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      const supabase = createClient();
      await supabase.from("concert_posts").delete().eq("post_id", postId);
      router.push("/concerts");
    }
  };

  return <button onClick={concertDeleteHandler}>삭제</button>;
};

export default ConcertDeleteButton;
