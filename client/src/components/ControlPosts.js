import React from "react";

function ControlPosts() {
  const editText = "글 수정하기";
  const deleteText = "글 삭제하기";
  return (
    <div>
      <h3>글관리</h3>
      <Btn text={editText} />
      <Btn text={deleteText} />
    </div>
  );
}

export default ControlPosts;
