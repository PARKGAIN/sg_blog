import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NumOfTotalPost from "../../components/NumOfTotalPost";
import PostList from "../../components/PostList";
import Header from "../../components/Header";
import useAsync from "../../hooks/useAsync";
import Darkmode from "darkmode-js";
const getPosts = async () => {
  const res = await axios.get("http://localhost/paginatedposts/1");
  return res.data;
};

function MainPage() {
  const [state] = useAsync(getPosts, []);
  const { loading, data: posts, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;
  const options = {
    bottom: "64px",
    right: "32px",
    left: "unset",
    time: "0.5s",
    mixColor: "#fff",
    backgroundColor: "#fff",
    buttonColorDark: "#100f2c",
    buttonColorLight: "#fff",
    saveInCookies: false,
    label: "🌓",
    autoMatchOsTheme: true,
  };
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  return (
    <div>
      <Header />
      <NumOfTotalPost />
      <PostList posts={posts} />
      <br />
      <br />
      <div className="post_write_page_center">
        <button className="pagination_btn">
          <Link to="/1">1 </Link>
        </button>

        <button className="pagination_btn">
          <Link to="/2">2</Link>
        </button>

        <button className="pagination_btn">
          <Link to="/3">3</Link>
        </button>

        <button className="pagination_btn">
          <Link to="/4">4</Link>
        </button>

        <button className="pagination_btn">
          <Link to="/5">5</Link>
        </button>

        <button className="pagination_btn">
          <Link to="/6">6 </Link>
        </button>

        <button className="pagination_btn">
          <Link to="/7">7</Link>
        </button>

        <button className="pagination_btn">
          <Link to="/8">8 </Link>
        </button>

        <button className="pagination_btn">
          <Link to="/9">9 </Link>
        </button>

        <button className="pagination_btn">
          <Link to="/10">10 </Link>
        </button>

        <button className="pagination_btn">
          <Link to="/11">&gt; </Link>
        </button>
      </div>
      <br />
    </div>
  );
}

export default MainPage;
