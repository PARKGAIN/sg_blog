import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
function BlogPost() {
  return (
    <>
      <div className="font">Nopainogaini</div>
      <FontAwesomeIcon icon={faMoon} />
      <h3>Dark Mode</h3>
    </>
  );
}

export default BlogPost;
