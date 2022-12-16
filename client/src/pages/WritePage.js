import React from "react";
import { useState } from "react";
import Btn from "../components/Btn";
import CancelBtn from "../components/CancelBtn";
import { Link } from "react-router-dom";
import Editor from "../components/Editor";
function WritePage() {
  console.log("render");

  // const PostPosts = () => {
  //   axios
  //     .post("/posts/write", {
  //       title: title,
  //       content: content,
  //     })
  //     .then((res) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const saveText = "글 저장하기";
  return (
    <div className="ml-40 mr-40">
      <div className="pt-5rem pb-5rem ">
        <input className="title_input" placeholder=" 제목을 입력하세요" />
        <Editor onchange={() => {}} />
      </div>
      <div className="flex">
        <Btn text={saveText} />
        <CancelBtn className="pb-5rem">
          <Link to="/">취소</Link>
        </CancelBtn>
      </div>
    </div>
  );
}

export default WritePage;
