import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function PostList({ posts }) {
  return (
    <Row xs={1} md={3} className="g-4">
      {Object.keys(posts).map((e, i) => {
        return (
          <Col>
            <Card style={{ width: "18rem" }} key={e}>
              <Card.Img variant="top" src="holder.js/100px180" alt="사진없음" />
              <Card.Body>
                <Card.Title>{posts[i].title}</Card.Title>
                <Card.Text>{posts[i].content}</Card.Text>
                <Button variant="primary">
                  <Link to={""}>글 보러가기</Link>
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
