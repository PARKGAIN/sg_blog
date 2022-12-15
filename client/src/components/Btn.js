import React from "react";
import { Link } from "react-router-dom";

function Btn() {
  const btnType = "글 저장하기";
  return (
    <div>
      <button className="write_btn">
        <Link to="/posts/write">{btnType}</Link>
      </button>
    </div>
  );
}

export default Btn;
