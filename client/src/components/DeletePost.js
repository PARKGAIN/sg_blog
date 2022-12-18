import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function DeletePost() {
  const { unq } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    confirm("정말 삭제하시겠습니까?");
    const baseUrl = "http://localhost:3000";
    const deletePosts = async () => {
      await axios
        .delete(baseUrl + "/posts/delete", {
          params: {
            unq: unq,
          },
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    deletePosts();
  }, []);
  return <div></div>;
}

export default DeletePost;
