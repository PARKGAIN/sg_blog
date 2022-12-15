import React from "react";
import { Link } from "react-router-dom";
import styles from "../Btn.module.css";
function Btn({ text }) {
  return (
    <div>
      <button className={styles.write_btn}>
        <Link to="/posts/write">{text}</Link>
      </button>
    </div>
  );
}

export default Btn;
