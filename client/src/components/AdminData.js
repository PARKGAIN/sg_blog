import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
function AdminData() {
  return (
    <div style={{ width: "50%", margin: "10px auto" }}>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">총 게시글 수</div>
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">총 댓글수</div>
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AdminData;
