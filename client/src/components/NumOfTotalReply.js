import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";

const getReplyNum = async () => {
  const res = await axios.get("http://localhost/reply/totalnumber");
  return res.data;
};

function NumOfTotalReply() {
  const [state, refetch] = useAsync(getReplyNum, []);
  const { loading, data: reply_num, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!reply_num) return null;
  return (
    <div>
      <img
        src={`https://img.shields.io/badge/총 댓글-${reply_num[0].count} 개-pink`}
        className="total_post_margin"
      />
    </div>
  );
}

export default NumOfTotalReply;
