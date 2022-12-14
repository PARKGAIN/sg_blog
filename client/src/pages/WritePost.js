import React, { useState, useEffect } from "react";
import axios from "axios";

function WritePost() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  function sendposts() {
    axios
      .post("http://localhost:3000/posts/write", {
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    nullCheck;
  }, []);

  const nullCheck = () => {
    if (JSON.stringify(title, undefined) != null) {
      sendposts();
    } else {
      alert("제목을 입력해주세요");
    }
  };
  return (
    <div>
      <div className="div__center">
        <div>제목</div>
        <input
          name="titleinput"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div>내용</div>
        <textarea
          name="contentinput"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            nullCheck();
          }}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default WritePost;
