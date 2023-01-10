import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Like() {
  const like = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD_LIKE" })}>👍</button>
      <span>{like.like}</span>
    </div>
  );
}

export default Like;
