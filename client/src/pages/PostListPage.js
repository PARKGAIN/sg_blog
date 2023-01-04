import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import styled from "styled-components";
import PostWriteBtn from "../components/PostWriteBtn";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts/manage`
      );
      const copy = [...postList];
      const festchedPosts = copy.concat(res.data);
      setPostList(festchedPosts);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  return (
    <>
      <PostItemBlock>
        <div>
          {postList.map((unq) => {
            const id = postList[unq].unq;

            return (
              <div key={id} className="flex postlistpage_center">
                <div className="mr-40">{postList[unq].title}</div>
                <div className="mr-40">{postList[unq].created_at}</div>
                <button>
                  <Link to={`${id}`}>글 수정하기</Link>
                </button>
                <DeleteBtn id={id} />
              </div>
            );
          })}
        </div>
      </PostItemBlock>
    </>
  );
};

function PostListPage() {
  const writeText = "글 작성하기";
  return (
    <div>
      <PostListBlock>
        <WritePostButtonWrapper>
          <PostWriteBtn text={writeText} />
        </WritePostButtonWrapper>
        <div>
          <PostItem />
        </div>
      </PostListBlock>
    </div>
  );
}

function DeleteBtn({ id }) {
  const navigate = useNavigate();
  const submit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "정말 삭제하시겠습니까?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            alert("Click Yes"), navigate(`/posts/delete/${id}`);
          },
        },
        {
          label: "No",
          onClick: () => {
            alert("Click No"), navigate(-1);
          },
        },
      ],
    });
  };
  return (
    <button className="ml-40" onClick={submit}>
      글 삭제하기
    </button>
  );
}

export default PostListPage;
