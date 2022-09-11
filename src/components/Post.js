import React from 'react';
import UserListContext from '../contexts/UserListContext';
import { Col, Card } from 'react-bootstrap';

function Post({title, body, userId}) {
  const usersList = React.useContext(UserListContext);
  const author = usersList.find(item => item.id === userId);

  return (
    <Col md={6} lg={4} className="d-flex flex-column mb-3">
      <Card className="flex-grow-1">
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-capitalize text-primary font-weight-bold">{title}</Card.Title>
          <Card.Text className="flex-grow-1 text-dark">{body}</Card.Text>
          <Card.Link href="#">{author.name}</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Post;
