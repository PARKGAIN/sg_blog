import React from "react";
import styled from "styled-components";
import Btn from "../components/Btn";

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
const SubInfo = styled.div`
  color: gray;
`;
// 이거 나중에 api 받아서 맵 함수로 바꿔야댐
const PostItem = () => {
  return (
    <PostItemBlock>
      <div className="flex">
        <h2>제목</h2>
        <SubInfo>
          <span>글쓴날</span>
        </SubInfo>
        <button>글 수정하기</button>
        <button>글 삭제하기</button>
      </div>
    </PostItemBlock>
  );
};
function ControlPosts() {
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
          <PostItem />
          <PostItem />
        </div>
      </PostListBlock>
    </div>
  );
}

export default ControlPosts;
