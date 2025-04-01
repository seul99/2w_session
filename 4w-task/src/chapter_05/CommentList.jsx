import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "박슬기",
    comment: "안녕하세요. 프론트엔드 박슬기 입니다.",
  },
  {
    name: "박진영",
    comment: "리액트를 배우고 있어요!!",
  },
  {
    name: "유재석",
    comment: "안녕하세요. 유재석입니다.",
  },
];
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
