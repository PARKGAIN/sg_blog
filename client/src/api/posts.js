import axios from "axios";

const GetPosts = () => {
  axios
    .get("/posts")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const PutPosts = () => {
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

const DeletePosts = () => {
  axios
    .delete(`/posts/delete/${PostId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
