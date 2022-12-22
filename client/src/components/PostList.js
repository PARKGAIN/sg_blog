import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
function PostList({ posts }) {
  return (
    <Row xs={1} md={3} className="g-4">
      {Object.keys(posts).map((unq) => {
        const id = posts[unq].unq;
        return (
          <Col key={id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" alt="사진없음" />
              <Card.Body>
                <Card.Title>{posts[unq].title}</Card.Title>
                <Card.Text>{parser(posts[unq].content)}</Card.Text>
                <Button variant="primary">
                  <Link to={`/posts/${id}`}>글 보러가기</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default PostList;
