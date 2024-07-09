import React from "react";
import CommentsView from "./CommentsView";
import CommentUpload from "./CommentUpload";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const Comments = ({ postId }: Params) => {
  return (
    <div className="w-full flex flex-col justify-center items-center border-t border-[#dddddd]">
      <CommentUpload postId={postId} />
      <CommentsView postId={postId} />
    </div>
  );
};

export default Comments;
