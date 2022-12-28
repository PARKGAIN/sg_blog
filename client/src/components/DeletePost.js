import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeletePost() {
  const navigate = useNavigate();
  const { unq } = useParams();
  useEffect(() => {
    deletePosts();
  }, []);

  const deletePosts = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/posts/delete`, {
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
