import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import NumOfTotalPost from "../components/NumOfTotalPost";
import PostList from "../components/PostList";
import { useParams, Link } from "react-router-dom";
function PaginatedMainPage() {
  const { page } = useParams();
  const [posts, setPosts] = useState("");
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/paginatedposts/${page}`);
      const copy = [...posts];
      const fetchedPosts = copy.concat(res.data);
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
        <button
          className="pagination_btn"
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </button>
        <Link to="/2">
          <button className="pagination_btn">2</button>
        </Link>
        <Link to="/3">
          <button className="pagination_btn">3</button>
        </Link>
        <Link to="/4">
          <button className="pagination_btn">4</button>
        </Link>
        <Link to="/5">
          <button className="pagination_btn">5</button>
        </Link>
        <Link to="/6">
          <button className="pagination_btn">6</button>
        </Link>
        <Link to="/7">
          <button className="pagination_btn">7</button>
        </Link>
        <Link to="/8">
          <button className="pagination_btn">8</button>
        </Link>
        <Link to="/9">
          <button className="pagination_btn">9</button>
        </Link>
        <Link to="/10">
          <button className="pagination_btn">10</button>
        </Link>
        <Link to="/11">
          <button className="pagination_btn">&gt;</button>
        </Link>
      </div>
      <br />
    </div>
  );
}

export default PaginatedMainPage;
