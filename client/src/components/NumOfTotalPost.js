import React, { useState, useEffect } from "react";
import axios from "axios";
function NumOfTotalPost() {
  const [postList, setPostList] = useState("");
  const baseUrl = "http://localhost";

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const res = await axios.get(baseUrl + "/posts/manage");
      const copy = [...postList];
      const festchedPosts = copy.concat(res.data);
      setPostList(festchedPosts);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  {
    Object.keys(postList).map((e, i) => {
      return <div key={i}>{postList[i].unq}</div>;
    });
  }
  const numOfTotalPost = postList.length;
  return (
    <div>
      <img
        src={`https://img.shields.io/badge/총 게시물-${numOfTotalPost} 개-blue`}
        className="total_post_margin"
      />
    </div>
  );
}

export default NumOfTotalPost;
