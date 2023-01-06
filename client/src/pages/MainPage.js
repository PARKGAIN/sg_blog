import React, { useEffect, useState } from "react";
import NumOfTotalPost from "../components/NumOfTotalPost";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import useAsync from "../hooks/useAsync";

function MainPage() {
  const [page, setPage] = useState("1");
  const [state, refetch] = useAsync(getPosts, []);
  const { loading, data: posts, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;

  const getPosts = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/paginatedposts/${page}`
    );
    return res.data;
  };

  return (
    <div>
      <Header />
      <NumOfTotalPost />
      <PostList posts={posts} />
      <br />
      <br />
      <div className="post_write_page_center">
        <Link to="/1">
          <button className="pagination_btn">1</button>
        </Link>
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

export default MainPage;
