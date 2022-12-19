import React, { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
//1. UI 만들기 2.axios로 데이터 받아와서 뿌리기 3.댓글처리 어캄
function PostPage() {
  useEffect(() => {
    const baseUrl = "http://localhost:3000";
    const getPost = async () => {
      await axios
        .get(baseUrl + "/")
        .then((res) => {
          // let copy = [...postList];
          // let festchedPosts = copy.concat(res.data);
          // setPostList(festchedPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // getPosts();
  }, []);
  return (
    <>
      <div className="main_page_center" style={{ width: "760px" }}>
        <Header />
        <div>
          <h1>제목</h1>
          <span>created_at</span>
        </div>
        <hr />
        <div>내용</div>
        좋아요? <br />
        목록이동 <br />
        <hr />
        <div>댓글창</div>
      </div>
    </>
  );
}

export default PostPage;
