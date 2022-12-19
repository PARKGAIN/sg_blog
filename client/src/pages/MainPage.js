import React, { useEffect, useState } from "react";
import Btn from "../components/Btn";
import TotalPost from "../components/TotalPost";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

//여기에서 데이터 받아와서 TotalPost에 props로 내려주면 될듯
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
      <TotalPost posts={posts} />
      <PostList posts={posts} />
      <Btn text={writeText} />
      <button>
        <Link to="/posts/manage">글 관리 사이트로 가기 </Link>
      </button>
    </div>
  );
}

export default MainPage;
