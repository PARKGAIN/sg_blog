import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const goUrl = () => {
    window.open("https://github.com/PARKGAIN");
  };
  return (
    <div>
      <div className="flex box_shadow">
        <div className="font mr-700 ml-10">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Nopainogaini
          </Link>
        </div>
        <FontAwesomeIcon icon={faRss} />
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
