/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';
import Camera from 'react-html5-camera-photo';
import { Form, SubmitButton } from './styles';

import 'react-html5-camera-photo/build/css/index.css';

import api from '../../serivces/api';

class Cam extends Component {
  state = {
    name: '',
    cpf: '',
    city: '',
    photo: '',
  };

  onTakePhoto(dataUri) {
    this.setState({ photo: dataUri });
    console.log('takePhoto');
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleCpfChange = e => {
    this.setState({ cpf: e.target.value });
  };

  handleCityChange = e => {
    this.setState({ city: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { name, city, cpf, photo } = this.state;

    const formData = new FormData();
    formData.append('image', photo);

    const data = { name, city, cpf, formData };

    await api.post('/cam', data);
  };

  render() {
    const { name, city, cpf } = this.state;

    return (
      <div>
        <h1>Câmera</h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={this.handleCpfChange}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={this.handleCityChange}
          />
          <Camera
            imageCompression={0.97}
            onTakePhoto={dataUri => {
              this.onTakePhoto(dataUri);
            }}
          />
          <SubmitButton>
            <span>Adicionar</span>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </div>
    );
  }
}

export default Cam;
