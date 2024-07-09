import Comments from "@/components/CommentList/Comments";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const page = ({ params }: Params) => {
  const { postId } = params;
  return (
    <div>
      게시물상세
      <Comments postId={postId} />
    </div>
  );
};

export default page;
