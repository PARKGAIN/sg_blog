import React from "react";

import { Link } from "react-router-dom";

function Writebtn() {
  return (
    <div>
      <button className="write_btn">
        {/* 여기 글씨 변수 처리해서 나중에 또 쓰자! */}
        <Link to="/posts/write">글 작성하기</Link>
      </button>
    </div>
  );
}

export default Writebtn;
