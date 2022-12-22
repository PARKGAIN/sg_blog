import React, { useEffect, useState } from "react";
import axios from "axios";
import Reply from "./Reply";
import styled from "styled-components";
const ReplyAddBtn = styled.button`
  padding: 10px 30px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: #d3d3d3;
`;
function Comment({ unq }) {
  const [inputs, setInputs] = useState({
    unq: unq,
    nickname: "",
    password: "",
    content: "",
  });

  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const sendReply = async () => {
    const baseUrl = "http://localhost:3000";
    await axios
      .post(baseUrl + "/reply/write", inputs)
      .then((res) => {
        console.log(res);
        alert("댓글이 저장되었습니다");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //비번 null이면 막아야함
  //function nullCheck(){}

  return (
    <div>
      <Reply unq={unq} />
      {/* //댓글 입력 */}
      <div>
        <div>
          <input
            style={{ width: "203.4px" }}
            name="nickname"
            placeholder="닉네임"
            type="text"
            value={inputs.nickname}
            onChange={handleInput}
          />
          <input
            style={{ width: "203.4px" }}
            name="password"
            placeholder="비밀번호"
            type="password"
            value={inputs.password}
            onChange={handleInput}
          />
        </div>
        <textarea
          cols="50"
          rows="5"
          name="content"
          style={{
            resize: "none",
            padding: "8px",
            maxHeight: "90px",
          }}
          value={inputs.content}
          onChange={handleInput}
        />
        <ReplyAddBtn onClick={sendReply}>등록</ReplyAddBtn>
      </div>
    </div>
  );
}

export default Comment;
