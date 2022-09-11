import React from 'react';
import PostListContext from '../contexts/PostListContext';
import UserListContext from '../contexts/UserListContext';
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap';

function SearchForm({onUpdatePostList}) {
  const postList = React.useContext(PostListContext);
  const userList = React.useContext(UserListContext);
  const [Author, setAuthor] = React.useState('');

  function handleChangeAuthor(e) {
    const authorValue = e.target.value;
    let authorList = userList.filter(item => item.name.toLowerCase().includes(authorValue.toLowerCase()));
    setAuthor(authorValue);

    if(authorValue.split('').length > 3) {
      switch(authorList.length > 1) {
        case true:
          authorList = authorList.map(item => item.id);
          const searchResult = postList.filter(item => authorList.find(authorListItem => authorListItem === item.userId));
          onUpdatePostList({
            arr: Boolean(searchResult.length) ? searchResult : postList
          });
          break;

        case false:
          onUpdatePostList({
            arr: Boolean(authorList[0]) ? postList.filter(item => item.userId === authorList[0].id) : postList
          });
          break;
      }
    } else {
      onUpdatePostList({
        arr: postList
      });
    }
  }

  return (
    <Form className="d-flex justify-content-center mb-4">
      <Col md={6} lg={4} className="px-0 px-lg-3">
        <InputGroup>
          <span className="input-group-prepend">
            <span className="input-group-text">&#x1F50E;</span>
          </span>
          <FormControl placeholder="Filter by author..." name="author" value={Author || ''} onChange={handleChangeAuthor} />
        </InputGroup>
      </Col>
    </Form>
  );
}

export default SearchForm;
