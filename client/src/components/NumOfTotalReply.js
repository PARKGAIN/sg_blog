import React, { useState, useEffect } from "react";
import axios from "axios";
function NumOfTotalReply() {
  const [numOfReply, setNumOfReply] = useState();
  useEffect(() => {
    getReplyNum();
  }, []);
  const getReplyNum = async () => {
    try {
      const res = await axios.get("http://localhost/reply/totalnumber");
      console.log(res.data);
      setNumOfReply(res.data[0].count);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  return (
    <div>
      <img
        src={`https://img.shields.io/badge/총 댓글-${numOfReply} 개-pink`}
        className="total_post_margin"
      />
    </div>
  );
}

export default NumOfTotalReply;
