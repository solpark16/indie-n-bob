import React from "react";
import CommentsView from "./CommentsView";
import CommentUpload from "./CommentUpload";

const Comments = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center border-t border-[#dddddd]">
      <CommentUpload />
      <CommentsView />
    </div>
  );
};

export default Comments;
