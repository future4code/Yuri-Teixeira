import React from 'react'
import axios from 'axios'

export default class CriarUsuario extends React.Component {
  state = {
    name: 'yuri',
    email: 'yuri@gmail.com'
  }

  nomeChange = (e) => {
    this.setState({ name: e.target.value })
  }

  emailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  criarUsuario = () => {
    const user = {
      name: this.state.name,
      email: this.state.email
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', user, {
      headers: {
        'Authorization': 'Yuri-Pinheiro-EPPS'
      }
    }).then(res => {
      console.log(res);
      console.log(res.data);
      alert('Usuário criado com sucesso!');
    }).catch(erro => {
      console.log(erro);
      alert('Falha ao criar usuário!', erro.message);
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder='Nome' onChange={this.nomeChange} value={this.state.name} />
        <input type="text" placeholder='Email' onChange={this.emailChange} value={this.state.email} />
        <button onClick={this.criarUsuario}>Criar usuário</button>
      </div>
    )
  }
}