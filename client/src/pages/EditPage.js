import React, { useEffect, useState } from "react";
import axios from "axios";
import Editor from "../components/Editor";
import { Link, useParams } from "react-router-dom";
import Btn from "../components/Btn";
import CancelBtn from "../components/CancelBtn";

function EditPage() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { unq } = useParams();
  const baseUrl = "http://localhost:3000";
  //IFFE(Immediately Invoked Function Expression)
  const get = async () => {
    await axios
      .get(baseUrl + `/posts/manage/${unq}`)
      .then((res) => {
        console.log(res.data);
        const copy = [...post];
        const fetched = res.data;
        const newCopy = copy.concat(fetched);
        setPost(newCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get();
  }, []);

  const editText = "글 수정하기";

  return (
    <div>
      <div className="ml-40 mr-40">
        <div className="pt-5rem pb-5rem ">
          {Object.keys(post).map((i) => (
            <input
              className="title_input"
              key={0}
              defaultValue={post[0].title}
            />
          ))}
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
  const baseUrl = "http://localhost:3000";
  axios
    .put(baseUrl + "/posts/update", {
      unq: unq,
      title: title,
      content: content,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default EditPage;
