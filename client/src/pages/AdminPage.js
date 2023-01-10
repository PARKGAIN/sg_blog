import React from "react";
import AdminData from "../components/AdminData";
import PostWriteBtn from "../components/PostWriteBtn";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AdminPage() {
  return (
    <div>
      <div className="post_write_page_center">
        <div className="flex mt-100">
          <h4>Manager</h4>
          <FontAwesomeIcon icon={faUserLarge} />
        </div>
      </div>
      <AdminData />
      <PostWriteBtn className="mt-100" />
    </div>
  );
}

export default AdminPage;
