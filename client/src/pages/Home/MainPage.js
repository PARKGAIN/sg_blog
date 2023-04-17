import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NumOfTotalPost from "../../components/NumOfTotalPost";
import PostList from "../../components/PostList";
import Header from "../../components/Header";
import useAsync from "../../hooks/useAsync";
import Darkmode from "darkmode-js";

function MainPage() {
  const getPosts = async () => {
  const res = await axios.get(`http://localhost/paginatedposts/${pageNum}`);
  return res.data;
};
  const [state] = useAsync(getPosts, []);
  const [pageNum,setPageNum] = useState();
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
          <Link to=`/${pageNum}`>{pageNum}</Link>
        </button>
      </div>
      <br />
    </div>
  );
}

export default MainPage;
