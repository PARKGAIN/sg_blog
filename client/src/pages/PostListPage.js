import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import styled from "styled-components";
import PostWriteBtn from "../components/PostWriteBtn";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAsync from "../hooks/useAsync";

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

const getPosts = async () => {
  const res = await axios.get(`http://localhost/posts/manage`);
  return res.data;
};

const PostItem = () => {
  const [state, refetch] = useAsync(getPosts, []);
  const { loading, data: postList, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!postList) return null;

  return (
    <>
      <PostItemBlock>
        <div>
          {postList.map((e, i) => {
            console.log(e);
            const id = postList[i].unq;
            return (
              <div key={i} className="flex postlistpage_center">
                <div className="mr-40">{postList[i].title}</div>
                <div className="mr-40">{postList[i].created_at}</div>
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
      title: "정말 삭제하시겠습니까",
      message: "정말 삭제하시겠습니까?",
      buttons: [
        {
          label: "예",
          onClick: () => {
            alert("예");
            deletePosts(id);
          },
        },
        {
          label: "아니오",
          onClick: () => {
            alert("아니오"), navigate(-1);
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

const deletePosts = async (id) => {
  try {
    await axios.delete(`http://localhost/posts/delete`, {
      params: {
        unq: id,
      },
    });
    alert("삭제완료");
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

export default PostListPage;
