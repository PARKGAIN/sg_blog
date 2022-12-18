import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import axios from "axios";
import { Link } from "react-router-dom";
const PostListBlock = styled.div`
  margin-top: 3rem;
`;
const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
const PostItemBlock = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  &:fisrst-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid gray;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: gray;
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = () => {
  const [postList, setPostList] = useState("");

  useEffect(() => {
    const baseUrl = "http://localhost:3000";
    const getPosts = async () => {
      await axios
        .get(baseUrl + "/posts/manage")
        .then((res) => {
          let copy = [...postList];
          let festchedPosts = copy.concat(res.data);
          setPostList(festchedPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPosts();
  }, []);

  return (
    <PostItemBlock>
      <div>
        {Object.keys(postList).map((unq) => {
          console.log(postList[unq].unq);
          const id = postList[unq].unq;
          return (
            <div key={id} className="flex">
              <div>{postList[unq].title}</div>
              <div>{postList[unq].created_at}</div>
              <button>글 수정하기</button>
              <button>
                <Link to={`/posts/delete/${id}`}>글 삭제하기</Link>
              </button>
            </div>
          );
        })}
      </div>
    </PostItemBlock>
  );
};
function PostListPage() {
  const writeText = "글 작성하기";
  return (
    <div>
      {/* <h3>글관리</h3> */}
      <PostListBlock>
        <WritePostButtonWrapper>
          <Btn text={writeText} />
        </WritePostButtonWrapper>
        <div>
          <PostItem />
        </div>
      </PostListBlock>
    </div>
  );
}

export default PostListPage;
