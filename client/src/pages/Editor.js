import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

function Editor() {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blackquote", "link", "image", "code-block"],
        ],
      },
      placeholder: "내용을 입력하세요",
      theme: "bubble",
    });
  }, []);
  return (
    <div className="pt-5rem pb-5rem">
      <input className="title_input" placeholder="제목을 입력하세요" />
      <div className="quill_wrapper">
        <div ref={quillElement}></div>
      </div>
    </div>
  );
}

export default Editor;
