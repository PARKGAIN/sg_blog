import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Editor from "../components/Editor";
import { Link, useParams } from "react-router-dom";
import styles from "../Btn.module.css";
import CancelBtn from "../components/CancelBtn";

function EditPage() {
  const { unq } = useParams();
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const content = useRef("");

  const getOnePost = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts/manage/${unq}`
      );
      const copy = [...post];
      const fetched = res.data;
      const newCopy = copy.concat(fetched);
      setPost(newCopy);
    } catch {
      (error) => console.log(error);
    }
  };

  const updatePosts = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/posts/update`, {
        unq: unq,
        title: title,
        content: content.current,
      });
    } catch {
      (error) => console.log(error);
    }
  };

  useEffect(() => {
    getOnePost();
  }, []);

  const handleContent = (value) => {
    content.current = value;
  };
  return (
    <div>
      <div className="ml-40 mr-40">
        <div className="pt-5rem pb-5rem ">
          {post.map((i) => (
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
