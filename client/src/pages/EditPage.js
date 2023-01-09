import React, { useState, useRef } from "react";
import axios from "axios";
import Editor from "../components/Editor";
import { Link, useParams } from "react-router-dom";
import CancelBtn from "../components/CancelBtn";
import useAsync from "../hooks/useAsync";

function EditPage() {
  const { unq } = useParams();
  const [state, refetch] = useAsync(getSinglePost, []);
  const { loading, data: post, error } = state;
  const [title, setTitle] = useState("");
  const content = useRef("");
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!post) return null;

  const getSinglePost = async () => {
    const res = await axios.get(`http://localhost/posts/manage/${unq}`);
    return res.data;
  };

  const updatePosts = async () => {
    try {
      await axios.put(`http://localhost/posts/update`, {
        unq: unq,
        title: title,
        content: content.current,
      });
    } catch {
      (error) => console.log(error);
    }
  };

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
            <button className="write_btn" onClick={updatePosts}>
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
