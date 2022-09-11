import React from 'react';
import Post from './Post';
import SearchForm from './SearchForm';
import api from '../utils/api';
import UserListContext from '../contexts/UserListContext';
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

  function handleUpdateUserList({arr}) {
    //console.log(data.arr);
    setUserList(arr);
  }

  return (
    <UserListContext.Provider value={Users}>
      <div className="alert alert-primary border-0 rounded-0 px-0 py-4 mb-0">
        <Container>
          <SearchForm onUpdateUserList={handleUpdateUserList} />
          <Row>
            {Posts.map((postItem) => (
              <Post
                key={postItem.id}
                title={postItem.title}
                body={postItem.body}
                userId={postItem.userId}
              />
            ))}
          </Row>
        </Container>
      </div>
    </UserListContext.Provider>
  );
}

export default App;
