import React, { useState } from "react";
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
    const getReply = async () => {
      await axios
        .get(baseUrl + "/reply/get")
        .then((res) => {
          const copy = { ...reply };
          const fetchedPosts = copy.concat(res.data);
          setPosts(fetchedPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getReply;
  }, []);

  function showInput() {
    setShowReplyInput(!showReplyInput);
  }

  return (
    <>
      {/* 댓글 보여주는 곳 */}
      <div>
        <span>작성자</span> <span>작성일자</span>
        <p>댓글 내용</p>
        <button>삭제</button>
        <button onClick={showInput}>댓글</button>
      </div>
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
