"use client";

import { useState } from "react";

function EditableComments({ comments: originalComments }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(originalComments);

  return (
    <div>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
      <div className="flex flex-row items-center w-fit">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="input mr-4"
        />
        <button
          className="btn btn-primary btn-lg tracking-tight leading-5"
          onClick={() => {
            setComments([...comments, newComment]);
            setNewComment("");
          }}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default EditableComments;
