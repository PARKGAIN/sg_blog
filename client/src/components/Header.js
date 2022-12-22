import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const goUrl = () => {
    window.open("https://github.com/PARKGAIN");
  };
  return (
    <div>
      <div className="flex">
        <div className="font mr-700 ml-10">Nopainogaini</div>
        {/* 다크모드는 쿠키에 저장 */}
        <div className="darkmode-border flex">
          <FontAwesomeIcon icon={faMoon} className="mt-13 mr-10" />
          <h6 style={{ lineHeight: "46px" }}>Dark Mode</h6>
        </div>
        <div onClick={goUrl} className="cursor-pointer">
          <FontAwesomeIcon icon={faGithub} className="github" />
        </div>
      </div>
    </div>
  );
}

export default Header;
