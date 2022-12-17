import axios from "axios";

const getPosts = () => {
  axios
    .get("/posts")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updatePosts = () => {
  axios
    .put("/posts/update", {
      id: id,
      btitle: 제목,
      content: 내용,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deletePosts = () => {
  axios
    .delete(`/posts/delete/${PostId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
