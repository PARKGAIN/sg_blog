import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";

const getPostNum = async () => {
  const res = await axios.get("http://localhost/posts/numofposts");
  return res.data;
};

function NumOfTotalPost() {
  const [state, refetch] = useAsync(getPostNum, []);
  const { loading, data: post_num, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!post_num) return null;

  return (
    <div>
      <img
        src={`https://img.shields.io/badge/총 게시물-${post_num[0].count} 개-blue`}
        className="total_post_margin"
      />
    </div>
  );
}

export default NumOfTotalPost;
