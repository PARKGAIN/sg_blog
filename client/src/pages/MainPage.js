import React, { useEffect, useState } from "react";
import TotalPost from "../components/TotalPost";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import ReactPaginate from "react-paginate";
function MainPage() {
  const [posts, setPosts] = useState("");
  const [page, setPage] = useState("");
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`http://localhost/posts?page=${page}`);
      const copy = [...posts];
      const fetchedPosts = copy.concat(res.data.result);
      setPosts(fetchedPosts);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  return (
    <div>
      <Header />
      <TotalPost posts={posts} />
      <PostList posts={posts} />
      <div className="flex">
        <button
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setPage(2);
            console.log(page);
            getPosts();
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setPage(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setPage(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setPage(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setPage(6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            setPage(7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setPage(8);
          }}
        >
          8
        </button>
        <button>9</button>
        <button>10</button>
        <button>&gt;</button>
      </div>
      <br />
    </div>
  );
}

export default MainPage;
