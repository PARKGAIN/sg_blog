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
      {posts.map((e, i) => {
        console.log(e);
        return (
          <Col key={i}>
            <Card className="width_17rem">
              <Card.Body>
                <Card.Title className="text_center">
                  {posts[i].title}
                </Card.Title>
                <div
                  style={{
                    whiteSpace: "nowrap",
                    height: "145px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    padding: "5px",
                  }}
                >
                  {parser(posts[i].content)}
                </div>
                <a variant="primary">
                  <Link to={`/posts/${posts[i].unq}`}>
                    <FontAwesomeIcon
                      icon={faRightLong}
                      className="float_right"
                    />
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
