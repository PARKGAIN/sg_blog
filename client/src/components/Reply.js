import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const ReplyAddBtn = styled.button`
  padding: 10px 30px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: #d3d3d3;
`;
function Reply() {
  const [reply, setReply] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);
  useEffect(() => {
    const baseUrl = "http://localhost:3000";
    const getReply = (async () => {
      await axios
        .get(baseUrl + "/reply/get")
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
      {/* 댓글 보여주는 곳 */}
      {Object.keys(reply).map((e, i) => {
        return (
          <div key={e}>
            <span>{reply[i].nickname}</span> <span>{reply[i].created_at}</span>
            <p>{reply[i].comment}</p>
            <button>삭제</button>
            <button onClick={showInput}>댓글</button>
          </div>
        );
      })}
      {showReplyInput && <ReReplyInput />}
    </>
  );
}
function ReReplyInput() {
  return (
    <div style={{ paddingLeft: "30px" }}>
      <div>
        <input placeholder="닉네임" type="text" />
        <input placeholder="비밀번호" type="password" />
      </div>
      <textarea
        cols="50"
        rows="5"
        style={{
          resize: "none",
          padding: "8px",
          maxHeight: "90px",
        }}
        defaultValue={"대갯"}
      />
      <ReplyAddBtn>등록</ReplyAddBtn>
    </div>
  );
}

export default Reply;
