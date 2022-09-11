import React from 'react';
import Post from './Post';
import api from '../utils/api';
import { Container, Row } from 'react-bootstrap';

import './App.scss';

function App() {
  const [Users, setUserList] = React.useState([]);
  const [Posts, setPostList] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUsers(), api.getPosts()])
      .then(([users, posts]) => {
        setUserList(users);
        setPostList(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='alert alert-primary border-0 rounded-0 px-0 py-4 mb-0'>
      <Container>
        <Row>
          {Posts.map((postItem) => (
            <Post
              key={postItem.id}
              title={postItem.title}
              body={postItem.body}
              author={postItem.userId}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
