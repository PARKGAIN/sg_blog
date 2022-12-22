import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ReplyToReply from "./ReplyToReply";
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
  const [reply, setReply] = useState("");
  const [showReplyInput, setShowReplyInput] = useState("");
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const sendReply = async () => {
    const baseUrl = "http://localhost";
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

  useEffect(() => {
    const getReply = (async () => {
      const baseUrl = "http://localhost";
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
  //비번 null이면 막아야함
  //function nullCheck(){}
  function showInput() {
    setShowReplyInput(!showReplyInput);
  }
  return (
    <div>
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
