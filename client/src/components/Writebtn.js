import React from "react";

import { Link } from "react-router-dom";

function Writebtn() {
  return (
    <div>
      <button className="write_btn">
        <Link to="/posts/write">글 작성하기</Link>
      </button>
    </div>
  );
}

export default Writebtn;
