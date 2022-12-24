import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { memo, useMemo, useRef } from "react";
import axios from "axios";
const Editor = memo((props) => {
  const { value, onChange } = props;
  const quillRef = useRef("");
  const imageHandler = () => {
    console.log("이미지 핸들러 시작");
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      console.log("온체인지");
      const file = input.files[0];
      const formData = new FormData();
      formData.append("img", file);
      try {
        const result = await axios.post("http://localhost:4000/img", formData);
        console.log("성공시", result.data.url);
        const IMG_URL = result.data.url;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        console.log("실패");
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
          ["image", "video"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={modules}
        value={value || ""}
        onChange={(content, delta, source, editor) =>
          onChange(editor.getHTML())
        }
        className="height-500"
        placeholder="내용을 입력하세요..."
      />
    </div>
  );
});

export default Editor;
