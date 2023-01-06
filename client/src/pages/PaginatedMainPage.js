import React from "react";
import Header from "../components/Header";
import NumOfTotalPost from "../components/NumOfTotalPost";
import PostList from "../components/PostList";
import { useParams, Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";

function PaginatedMainPage() {
  const { page } = useParams();
  const getPosts = async () => {
    const res = await axios.get(`http://localhost/paginatedposts/${page}`);
    return res.data;
  };
  const [state, refetch] = useAsync(getPosts, []);
  const { loading, data: posts, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;

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
            page = 1;
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
