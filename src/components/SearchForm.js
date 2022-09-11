import React from 'react';
import UserListContext from '../contexts/UserListContext';
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap';

function SearchForm({onUpdateUserList}) {
  const usersList = React.useContext(UserListContext);
  const [Author, setAuthor] = React.useState('');

  function handleChangeAuthor(e) {
    const authorValue = e.target.value;
    setAuthor(authorValue);
    console.log(usersList.filter(item => item.name.toLowerCase().includes(authorValue.toLowerCase())));
    if(authorValue.split('').length > 3) {
      onUpdateUserList({
        arr: usersList.filter(item => item.name.toLowerCase().includes(authorValue.toLowerCase()))
      });
    }
  }

  return (
    <Form className="d-flex justify-content-center mb-4">
      <Col md={6} lg={4} className="px-0 px-lg-3">
        <InputGroup>
          <div className="input-group-prepend">
            <div className="input-group-text">&#x1F50E;</div>
          </div>
          <FormControl placeholder="Filter by author..." name="author" value={Author || ''} onChange={handleChangeAuthor} />
        </InputGroup>
      </Col>
    </Form>
  );
}

export default SearchForm;
