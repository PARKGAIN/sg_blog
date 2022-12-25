import React, { useState, useEffect } from "react";
import axios from "axios";

function NumOfTotalPost() {
  const [numOfPost, setNumOfPost] = useState("");
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get("http://localhost/posts/numofposts");
      setNumOfPost(res.data[0].count);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  return (
    <div>
      <img
        src={`https://img.shields.io/badge/총 게시물-${numOfPost} 개-blue`}
        className="total_post_margin"
      />
    </div>
  );
}

export default NumOfTotalPost;
