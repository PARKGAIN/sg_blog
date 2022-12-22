import React, { useEffect, useState } from "react";
import PostWriteBtn from "../components/PostWriteBtn";
import TotalPost from "../components/TotalPost";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function MainPage() {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    const baseUrl = "http://localhost:3000";
    const getPosts = async () => {
      await axios
        .get(baseUrl + "/posts/manage")
        .then((res) => {
          const copy = [...posts];
          const fetchedPosts = copy.concat(res.data);
          setPosts(fetchedPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPosts();
  }, []);

  const writeText = "글 작성하기";
  return (
    <div className="main_page_center">
      <Header />
      <h3>D-3</h3>
      <TotalPost posts={posts} />
      <PostList posts={posts} />
      <PostWriteBtn text={writeText} />
      <button>
        <Link to="/posts/manage">글 관리 사이트로 가기 </Link>
      </button>
    </div>
  );
}

export default MainPage;
