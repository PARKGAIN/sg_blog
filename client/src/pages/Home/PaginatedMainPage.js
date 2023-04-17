import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import NumOfTotalPost from "../../components/NumOfTotalPost";
import PostList from "../../components/PostList";
import useAsync from "../../hooks/useAsync";
import axios from "axios";
function PaginatedMainPage() {
  const { page } = useParams();
  const navigate = useNavigate();
  const getPosts = async () => {
    const res = await axios.get(`http://localhost/paginatedposts/${page}`);
    return res.data;
  };
  const [state] = useAsync(getPosts, []);
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
            navigate(`/${page}`);
          }}
        >
          {page}
        </button>
      </div>
      <br />
    </div>
  );
}

export default PaginatedMainPage;
