import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeletePost() {
  const navigate = useNavigate();
  const { unq } = useParams();
  const baseUrl = "http://localhost";
  useEffect(() => {
    deletePosts();
  }, []);

  const deletePosts = async () => {
    try {
      await axios.delete(baseUrl + "/posts/delete", {
        params: {
          unq: unq,
        },
      });
      navigate(-1);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  return <></>;
}

export default DeletePost;
