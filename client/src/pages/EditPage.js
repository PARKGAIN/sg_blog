import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Editor from "../components/Editor";
import { Link, useParams } from "react-router-dom";
import styles from "../Btn.module.css";
import CancelBtn from "../components/CancelBtn";

function EditPage() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const content = useRef("");
  const { unq } = useParams();
  const baseUrl = "http://localhost";

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

  const updatePosts = async () => {
    await axios
      .put(baseUrl + "/posts/update", {
        unq: unq,
        title: title,
        content: content.current,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get();
  }, []);

  const handleContent = (value) => {
    content.current = value;
    console.log(content.current);
  };
  return (
    <div>
      <div className="ml-40 mr-40">
        <div className="pt-5rem pb-5rem ">
          {Object.keys(post).map((i) => (
            <input
              className="title_input"
              key={0}
              defaultValue={post[0].title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          ))}
          <Editor value={content} onChange={handleContent} />
        </div>

        <div className="flex">
          <div>
            <button className={styles.write_btn} onClick={updatePosts}>
              글수정하기
            </button>
          </div>
          <CancelBtn className="pb-5rem">
            <Link to="/">취소</Link>
          </CancelBtn>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
