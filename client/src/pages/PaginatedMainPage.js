import React from "react";
import Header from "../components/Header";
import NumOfTotalPost from "../components/NumOfTotalPost";
import PostList from "../components/PostList";
import { useParams } from "react-router-dom";
function PaginatedMainPage() {
  const { page } = useParams();
  return (
    <div>
      <Header />
      <NumOfTotalPost />
      <PostList />
    </div>
  );
}

export default PaginatedMainPage;
