import React from 'react';

class Api extends React.Component {
  constructor(baseUrl) {
    super();
    this._baseUrl = baseUrl;
  }

  _checkResponse(result, resultAlert) {
    if (result.ok) {
      return result.json();
    }

    return Promise.reject(`${resultAlert}: ${result.status}`);
  }

  getPosts() {
    return fetch(`${this._baseUrl}/posts`)
      .then((response) => {return this._checkResponse(response, 'Ошибка при загрузке постов')})
      .then((json) => json);
  }

  getUsers() {
    return fetch(`${this._baseUrl}/users`)
      .then((response) => {return this._checkResponse(response, 'Ошибка при загрузке данных пользователей')})
      .then((json) => json);
  }
}

const api = new Api('https://jsonplaceholder.typicode.com');

export default api;