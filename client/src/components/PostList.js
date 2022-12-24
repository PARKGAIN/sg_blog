import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function PostList({ posts }) {
  return (
    <Row xs={1} md={3} className="g-4 width_934 main_page_center">
      {Object.keys(posts).map((unq) => {
        const id = posts[unq].unq;
        return (
          <Col key={id}>
            <Card style={{ width: "17rem" }}>
              <Card.Body>
                <Card.Title className="text_center">
                  {posts[unq].title}
                </Card.Title>
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
                <a variant="primary">
                  <Link to={`/posts/${id}`}>
                    <FontAwesomeIcon icon={faRightLong} />
                  </Link>
                </a>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default PostList;
