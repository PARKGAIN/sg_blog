import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Btn from "../components/Btn";
import CancelBtn from "../components/CancelBtn";
import { Link } from "react-router-dom";
function Editor() {
  const [value, setValue] = useState("");
  console.log("render");
  const saveText = "글 저장하기";
  return (
    <>
      <div className="pt-5rem pb-5rem">
        <input className="title_input" placeholder=" 제목을 입력하세요" />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="height-400px"
        />
      </div>
      <div className="flex">
        <Btn text={saveText} />
        <CancelBtn>
          <Link to="/">취소</Link>
        </CancelBtn>
      </div>
    </>
  );
}

export default Editor;
