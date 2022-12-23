import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import parser from "html-react-parser";
function PostPage() {
  const { unq } = useParams();
  console.log(unq);
  const [post, setPost] = useState("");
  const baseUrl = "http://localhost";
  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  return (
    <div className="main_page_center">
      <Header />
      <div style={{ width: "760px", margin: "0px auto" }}>
        {Object.keys(post).map((e, i) => {
          return (
            <div key={e}>
              <h1>{post[i].title}</h1>
              <span>{post[i].created_at}</span>
              <hr />
              <div>{parser(post[i].content)}</div>
            </div>
          );
        })}
        좋아요? <br />
        목록이동 <br />
        <hr />
        <Comment unq={unq} />
      </div>
    </div>
  );
}

export default PostPage;
