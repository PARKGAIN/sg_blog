import React from "react";

function TotalPost({ posts }) {
  const totalNum = Object.keys(posts).length;
  return <div>총 {totalNum} 개</div>;
}

export default TotalPost;
