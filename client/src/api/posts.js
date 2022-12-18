import axios from "axios";

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
