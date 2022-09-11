import React from 'react';
import { Col, Card } from 'react-bootstrap';

function Post({title, body, author}) {
  /*
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = card.owner._id === currentUser.id;
  const isLiked = card.likes.some(item => item._id === currentUser.id);
  */

  return (
    <Col md={6} lg={4} className='d-flex flex-column mb-3'>
      <Card className='flex-grow-1'>
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='text-capitalize text-primary font-weight-bold'>{title}</Card.Title>
          <Card.Text className='flex-grow-1 text-dark'>{body}</Card.Text>
          <Card.Link href="#">{author}</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Post;
