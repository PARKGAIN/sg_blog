import React, { useEffect, useState } from "react";
import axios from "axios";
import Editor from "../components/Editor";
import { Link, useParams } from "react-router-dom";
import Btn from "../components/Btn";
import CancelBtn from "../components/CancelBtn";

function EditPage() {
  const [post, setPost] = useState("");
  const { unq } = useParams();
  const baseUrl = "http://localhost:3000";
  useEffect(() => {
    (async () => {
      await axios
        .get(baseUrl + `/posts/manage/${unq}`)
        .then((res) => {
          console.log("아 제발");
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  const editText = "글 수정하기";
  console.log(post);

  return (
    <div>
      <div className="ml-40 mr-40">
        <div className="pt-5rem pb-5rem ">
          <input
            className="title_input"
            placeholder=" 제목을 입력하세요"
            // value={title}
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
          />
          <Editor />
        </div>
        <div className="flex">
          <div>
            <Btn text={editText} />
          </div>
          <CancelBtn className="pb-5rem">
            <Link to="/">취소</Link>
          </CancelBtn>
        </div>
      </div>
    </div>
  );
}

const updatePosts = () => {
  axios
    .put("/posts/update", {
      id: id,
      btitle: 제목,
      content: 내용,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default EditPage;
