"use client";

import { useQuery } from "@tanstack/react-query";
import SITE_URL from "@/constant";
import LoadingComments from "./LoadingComments";
import Comment from "./Comment";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useEffect, useState } from "react";
import ErrorGetComments from "./ErrorGetComments";
import { CommentType } from "@/types/Comments";
import { createClient } from "@/utils/supabase/client";

const TABLE_NAME = "recommendation_comments";
const supabase = createClient();

const CommentsView = ({ postId }: Params) => {
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(1);
  const LIMIT: number = 5;
  const OFFSET: number = (pageNo - 1) * LIMIT;

  const { data: cmtLength } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const { count } = await supabase
        .from(TABLE_NAME)
        .select("*, users:author_id(*)", { count: "exact", head: true })
        .eq("post_id", postId);
      return count;
    },
  });

  const {
    data: comments,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["comments", postId, pageNo],
    queryFn: async () => {
      const { data } = await supabase
        .from(TABLE_NAME)
        .select("*, users:author_id(*)")
        .eq("post_id", postId)
        .order("created_at", { ascending: false })
        .range(OFFSET, OFFSET + LIMIT - 1);

      return data;
    },
  });

  useEffect(() => {
    if (comments && cmtLength) {
      setPageSize(Math.ceil(cmtLength / LIMIT));
    }
  }, [comments, cmtLength]);

  const handleClickPageBtn = async (num: number) => {
    setPageNo(num);
  };

  if (isPending) {
    return <LoadingComments />;
  }

  if (isError) {
    return <ErrorGetComments />;
  }
  return (
    <div className="w-full mt-[5px] text-[18px]">
      <span className="w-full h-[90px] flex items-center text-[#8D8D8D] ">
        댓글 ({cmtLength})
      </span>
      {comments?.map((comment) => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
      <div className="w-full h-[100px] flex justify-center items-center gap-5">
        {[...Array(pageSize)].map((_, index) => {
          return (
            <button
              key={index + 1}
              onClick={() => handleClickPageBtn(index + 1)}
              className={`hover:cursor-pointer ${
                pageNo === index + 1 ? "text-[#10AF86]" : "text-[#616161]"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsView;
