import React from "react";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
function PostList({ posts }) {
  return (
    <Row xs={1} md={3} className="g-4 width_1000">
      {Object.keys(posts).map((unq) => {
        const id = posts[unq].unq;
        return (
          <Col key={id}>
            <Card style={{ width: "17rem" }}>
              <Card.Body>
                <Card.Title>{posts[unq].title}</Card.Title>
                <div
                  style={{
                    whiteSpace: "nowrap",
                    height: "110px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    padding: "5px",
                  }}
                >
                  {parser(posts[unq].content)}
                </div>
                <button variant="primary">
                  <Link to={`/posts/${id}`}>→</Link>
                </button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default PostList;
