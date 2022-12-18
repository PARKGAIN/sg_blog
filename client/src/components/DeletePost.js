import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function DeletePost() {
  const { unq } = useParams();
  useEffect(() => {
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
