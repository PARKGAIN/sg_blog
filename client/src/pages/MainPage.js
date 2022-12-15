import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Btn from "../components/Btn";
import BlogPost from "../components/BlogPost";
function MainPage() {
  return (
    <div className="center">
      <div className="flex">
        <div className="font mr-800 ml-10">Nopainogaini</div>
        {/* 다크모드는 쿠키에 저장 */}
        <div className="darkmode-border flex">
          <FontAwesomeIcon icon={faMoon} />
          <h6 style={{ lineHeight: "46px" }}>Dark Mode</h6>
        </div>
      </div>
      <BlogPost />
      <Btn />
    </div>
  );
}

export default MainPage;
