import React from "react";

function TotalPost({ posts }) {
  const totalNum = Object.keys(posts).length;
  return (
    <div>
      <img src={`https://img.shields.io/badge/총 게시물-${totalNum} 개-blue`} />
    </div>
  );
}

export default TotalPost;
