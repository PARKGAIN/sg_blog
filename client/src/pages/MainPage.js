import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Btn from "../components/Btn";
import TotalPost from "../components/TotalPost";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
function MainPage() {
  // useEffect(() => {
  //   const baseUrl = "http://localhost:3000";
  //   const getPosts = async () => {
  //     await axios
  //       .get(baseUrl + "/posts/manage")
  //       .then((res) => {
  // let copy = [...postList];
  // let festchedPosts = copy.concat(res.data);
  // setPostList(festchedPosts);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getPosts();
  // }, []);

  const writeText = "글 작성하기";
  return (
    <div className="main_page_center">
      <div className="flex">
        <div className="font mr-800 ml-10">Nopainogaini</div>
        {/* 다크모드는 쿠키에 저장 */}
        <div className="darkmode-border flex">
          <FontAwesomeIcon icon={faMoon} className="mt-13 mr-10" />
          <h6 style={{ lineHeight: "46px" }}>Dark Mode</h6>
        </div>
      </div>
      <TotalPost />
      <PostList />
      <Btn text={writeText} />
      <button>
        <Link to="/posts/manage">글 관리 사이트로 가기 </Link>
      </button>
    </div>
  );
}

export default MainPage;
