import React from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import axios from "axios";

function WritePage() {
  const [title, setTitle] = useState("");
  const content = useRef("");
  const navigate = useNavigate();
  const sendPost = async () => {
    try {
      await axios.post(`http://localhost/posts/write`, {
        title: title,
        content: content.current,
      });
      alert("글이 저장되었습니다");
      navigate(-1);
    } catch {
      (error) => console.log(error);
    }
  };

  const saveText = "글 저장하기";
  const handleContent = (value) => {
    content.current = value;
  };
  return (
    <div className="post_write_page_center">
      <div className="pt-5rem pb-5rem ">
        <div>제목</div>
        <input
          className="title_input"
          placeholder=" 제목을 입력하세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div>내용</div>
        <Editor value={content} onChange={handleContent} />
      </div>
      <div className="flex ">
        <div onClick={sendPost}>
          <button className="post_write_btn">저장하기</button>
        </div>
        <button className="post_cancel_btn">
          <Link to="/">취소</Link>
        </button>
      </div>
    </div>
  );
}

export default WritePage;
