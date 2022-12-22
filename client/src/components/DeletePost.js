import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function DeletePost() {
  const { unq } = useParams();
  const navigate = useNavigate();

  const baseUrl = "http://localhost";
  useEffect(() => {
    const deletePosts = (async () => {
      await axios
        .delete(baseUrl + "/posts/delete", {
          params: {
            unq: unq,
          },
        })
        .then((res) => {
          console.log(res);
          navigate(-1);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
    deletePosts;
  }, []);

  console.log("render");

  return <></>;
}

export default DeletePost;
