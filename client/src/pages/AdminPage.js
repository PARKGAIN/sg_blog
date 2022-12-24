import React from "react";
import { Link } from "react-router-dom";
import AdminData from "../components/AdminData";
import PostWriteBtn from "../components/PostWriteBtn";
function AdminPage() {
  return (
    <div>
      AdminPage
      <AdminData />
      <button>
        <Link to="/posts/manage">글 관리 사이트로 가기 </Link>
        <PostWriteBtn />
      </button>
    </div>
  );
}

export default AdminPage;
