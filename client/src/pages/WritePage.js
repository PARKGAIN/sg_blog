import React from "react";
import { useState, useRef } from "react";
import CancelBtn from "../components/CancelBtn";
import { Link, useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import axios from "axios";
import PostWriteBtn from "../components/PostWriteBtn";
function WritePage() {
  const [title, setTitle] = useState("");
  const content = useRef("");
  const navigate = useNavigate();
  const baseUrl = "http://localhost";
  const sendPost = async () => {
    try {
      await axios.post(baseUrl + "/posts/write", {
        title: title,
        content: content.current,
      });
      navigate(-1);
    } catch {
      (error) => console.log(error);
    }
  };

  const saveText = "글 저장하기";
  const handleContent = (value) => {
    content.current = value;
    console.log(content.current);
  };
  return (
    <div className="ml-40 mr-40">
      <div className="pt-5rem pb-5rem ">
        <input
          className="title_input"
          placeholder=" 제목을 입력하세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Editor value={content} onChange={handleContent} />
      </div>
      <div className="flex">
        <div onClick={sendPost}>
          <PostWriteBtn text={saveText} />
        </div>
        <CancelBtn>
          <Link to="/">취소</Link>
        </CancelBtn>
      </div>
    </div>
  );
}
export default WritePage;
