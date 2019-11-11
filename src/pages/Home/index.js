/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Image } from 'react';
import { Link } from 'react-router-dom';

import api from '../../serivces/api';

class Home extends Component {
  state = {
    data: [],
  };

  handleInit = async e => {
    const response = await api.get(`/users`);
    this.setState({ data: response.data });
    console.log(response.data);
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h2> Home </h2>

        <Link to="/cam"> Cadastro</Link>

        <button type="button" onClick={this.handleInit}>
          Buscar
        </button>

        {data.map(d => (
          <li key={d.name}>
            <strong>{d.name}</strong>
            <br />
            <strong>{d.cpf}</strong>
            <br />
            <strong>{d.city}</strong>
            <br />
            <Image src={d.photo} alt="imagem" />
          </li>
        ))}
      </div>
    );
  }
}

export default Home;
