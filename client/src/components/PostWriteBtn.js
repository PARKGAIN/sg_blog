import React from "react";
import { Link } from "react-router-dom";
function PostWriteBtn() {
  return (
    <div>
      <button className="write_btn">
        <Link to="/posts/write">
          <span>글 작성하러가기</span>
        </Link>
      </button>
    </div>
  );
}

export default PostWriteBtn;
