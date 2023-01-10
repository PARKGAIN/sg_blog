import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import { Link } from "react-router-dom";
import NumOfTotalPost from "../components/NumOfTotalPost";
import NumOfTotalReply from "./NumOfTotalReply";
function AdminData() {
  return (
    <div className="width_50 margin_10_auto">
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">총 게시글 수</div>
          </div>

          <NumOfTotalPost />
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">총 댓글수</div>
          </div>
          <NumOfTotalReply />
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">좋아요 갯수</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">글 관리하러 가기</div>
          </div>
          <button className="post_manage_btn">
            <Link to="/posts/manage">글 관리 사이트로 가기 </Link>
          </button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AdminData;
