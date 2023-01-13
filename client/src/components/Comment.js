import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ReplyToReply from "./ReplyToReply";
import useAsync from "../hooks/useAsync";

const ReplyAddBtn = styled.button`
  padding: 5px 30px;
  border: 1px solid #eeeeee;
  border-radius: 40px;
  color: white;
  background-color: black;
`;
function Comment({ unq }) {
  const getReply = async () => {
    const res = await axios.get(`http://localhost/reply/get/${unq}`);
    return res.data;
  };
  const [state] = useAsync(getReply, []);
  const [showReplyInput, setShowReplyInput] = useState("");
  const [inputs, setInputs] = useState({
    unq: unq,
    nickname: "",
    password: "",
    content: "",
  });
  const { loading, data: reply, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!reply) return null;

  const sendReply = async () => {
    try {
      await axios.post("http://localhost/reply/write", inputs);
      alert("댓글이 저장되었습니다");
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const deleteReply = async (reply_id) => {
    try {
      await axios.delete(`http://localhost/reply/delete/${reply_id}`);
      alert("댓글이 삭제되었습니다");
    } catch {
      (error) => console.log(error);
    }
  };
  const passwordCheck = (x) => {
    const password_input = prompt("비밀번호 입력", "");
    return password_input == x ? true : false;
  };

  function showInput() {
    setShowReplyInput(!showReplyInput);
  }
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {reply.map((e, i) => {
        const reply_id = reply[i].reply_no;
        const reply_password = reply[i].password;
        return (
          <div key={reply_id}>
            <span className="mr-60">{reply[i].nickname}</span>
            <span>{reply[i].created_at}</span>
            <p>{reply[i].comment}</p>
            <button
              className="reply_cancel"
              onClick={() =>
                passwordCheck(reply_password)
                  ? deleteReply(reply_id)
                  : alert("잘못된 비밀번호입니다")
              }
            >
              삭제
            </button>
            <button
              onClick={() => {
                showInput();
              }}
              className="re_reply-btn_add"
            >
              댓글
            </button>
            <hr className="mt-5" />
            <ReplyToReply showReplyInput={showReplyInput} />
          </div>
        );
      })}
      <div>
        <div>
          <input
            style={{ width: "277.8px" }}
            name="nickname"
            placeholder="닉네임"
            type="text"
            value={inputs.nickname}
            onChange={handleInput}
          />
          <input
            style={{ width: "277.8px" }}
            name="password"
            placeholder="비밀번호"
            type="password"
            value={inputs.password}
            onChange={handleInput}
          />
        </div>
        <textarea
          cols="70"
          rows="6"
          name="content"
          style={{
            resize: "none",
            padding: "8px",
            maxHeight: "90px",
          }}
          value={inputs.content}
          onChange={handleInput}
        />
        <ReplyAddBtn
          onClick={() =>
            inputs.password ? sendReply() : alert("비밀번호를 입력해주세요")
          }
        >
          등록
        </ReplyAddBtn>
      </div>
    </div>
  );
}

export default Comment;
