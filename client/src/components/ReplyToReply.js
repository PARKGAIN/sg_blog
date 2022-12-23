import React from "react";
import styled from "styled-components";
const ReplyAddBtn = styled.button`
  padding: 5px 30px;
  border: 1px solid #eeeeee;
  border-radius: 40px;
  color: white;
  background-color: black;
`;
function ReplyToReply({ showReplyInput }) {
  return <div>{showReplyInput && <ReReplyInput />}</div>;
}

function ReReplyInput() {
  return (
    <div style={{ paddingLeft: "30px" }}>
      <div>
        <input placeholder="닉네임" type="text" />
        <input placeholder="비밀번호" type="password" />
      </div>
      <textarea
        cols="60"
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
export default ReplyToReply;
