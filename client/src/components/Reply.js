import React, { useState, useEffect } from "react";

import axios from "axios";
import ReplyToReply from "./ReplyToReply";

function Reply({ unq }) {
  const [reply, setReply] = useState("");
  const [showReplyInput, setShowReplyInput] = useState("");
  useEffect(() => {
    const baseUrl = "http://localhost:3000";
    (async () => {
      await axios
        .get(baseUrl + `/reply/get/${unq}`)
        .then((res) => {
          const copy = [...reply];
          const fetchedReply = copy.concat(res.data);
          setReply(fetchedReply);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  function showInput() {
    setShowReplyInput(!showReplyInput);
  }

  return (
    <>
      {/* 하위컴포넌트에다가 키 값으로 구별해서 아마 props쓰며는 될듯 그렇게 한 개만 열리도록 해보자 */}
      {Object.keys(reply).map((e, i) => {
        return (
          <div key={e}>
            <span>{reply[i].nickname}</span> <span>{reply[i].created_at}</span>
            <p>{reply[i].comment}</p>
            <button>삭제</button>
            <button onClick={showInput}>댓글</button>
            <ReplyToReply showReplyInput={showReplyInput} />
          </div>
        );
      })}
    </>
  );
}

export default Reply;
