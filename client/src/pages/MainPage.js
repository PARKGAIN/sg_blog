import React, { useEffect, useState } from "react";
import NumOfTotalPost from "../components/NumOfTotalPost";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function MainPage() {
  const [posts, setPosts] = useState("");
  const [page, setPage] = useState("1");
  const [number, setNum] = useState([1, 2, 3, 4, 5, 6]);
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
      <NumOfTotalPost />
      <PostList posts={posts} />
      <br />
      <br />
      <div className="post_write_page_center">
        {number.map((e, i) => {
          return (
            <>
              <button
                className="pagination_btn"
                key={i}
                onClick={() => {
                  setPage(number[i]);
                }}
              >
                {number[i]}
              </button>
            </>
          );
        })}
        <button className="pagination_btn">&gt;</button>
      </div>
      <br />
    </div>
  );
}

export default MainPage;
