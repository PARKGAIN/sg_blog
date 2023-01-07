import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const goUrl = () => {
    window.open("https://github.com/PARKGAIN");
  };
  return (
    <div className="flex">
      <div className="ml_300 mr_900">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <span className="font_sans">&emsp;&emsp;&emsp;Nopainogaini</span>
        </Link>
      </div>

      <div onClick={goUrl} className="cursor-pointer">
        <FontAwesomeIcon icon={faGithub} className="github mr-40" />
      </div>
      <FontAwesomeIcon icon={faRss} className="mt-20 width_height_30" />
    </div>
  );
}

export default Header;
