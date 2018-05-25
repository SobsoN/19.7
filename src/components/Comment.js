import React from "react";

const Comment = ({ text, votes, id, thumbUpComment, thumbDown}) => (
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={()=> thumbDown(id)}>Thumb Down</button>
  </li>
);

export default Comment;
