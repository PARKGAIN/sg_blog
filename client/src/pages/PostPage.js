import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import parser from "html-react-parser";
import useAsync from "../hooks/useAsync";

function PostPage() {
  const { unq } = useParams();
  const getSinglePost = async () => {
    const res = await axios.get(`http://localhost/posts/manage/${unq}`);
    return res.data;
  };
  const [state, refetch] = useAsync(getSinglePost, []);
  const { loading, data: post, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!post) return null;

  return (
    <div className="main_page_center">
      <Header />
      <div style={{ width: "760px", margin: "0px auto" }}>
        {post.map((e, i) => {
          return (
            <div key={e}>
              <h1>{post[i].title}</h1>
              <span>{post[i].created_at}</span>
              <hr />
              <div>{parser(post[i].content)}</div>
            </div>
          );
        })}

        <hr className="mt-13" />
        <h4>댓글</h4>
        <Comment unq={unq} />
      </div>
    </div>
  );
}

export default PostPage;
