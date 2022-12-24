import React, { useEffect, useState } from "react";
import PostWriteBtn from "../components/PostWriteBtn";
import TotalPost from "../components/TotalPost";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Pagination from "react-bootstrap/Pagination";
function MainPage() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const res = await axios.get("http://localhost/posts/manage");
      const copy = [...posts];
      const fetchedPosts = copy.concat(res.data);
      setPosts(fetchedPosts);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  let active = 2;
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  const pagination = (
    <div style={{ margin: "0px auto", display: "table" }}>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
  return (
    <div>
      <Header />
      <TotalPost posts={posts} />
      <PostList posts={posts} />
      <PostWriteBtn />
      {pagination}
    </div>
  );
}

export default MainPage;
