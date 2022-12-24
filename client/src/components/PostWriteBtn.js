import React from "react";
import { Link } from "react-router-dom";
import styles from "../Btn.module.css";
function PostWriteBtn() {
  return (
    <div>
      <button className={styles.write_btn}>
        <Link to="/posts/write">
          <span>글 작성하기</span>
        </Link>
      </button>
    </div>
  );
}

export default PostWriteBtn;
