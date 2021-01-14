import React from 'react'
import axios from 'axios'
import { headers, urlLabenusers } from './conectionAPI'

export default class ListUser extends React.Component {
  state = {
    usuarios: [],
    detailUser: [],
    pageDetailUser: false,
    editUser: false,
    newName: '',
    newEmail: ''
  }

  componentDidMount = () => {
    this.getUsers();
  }

  componentDidUpdate = () => {
    this.getUsers();
  }

  getUsers = () => {
    const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'Yuri-Pinheiro-EPPS'
      }
    })

    request.then((resposta) => {
      this.setState({ usuarios: resposta.data })
    }).catch(erro => {
      alert('Erro ao buscar usuários' + erro.message)
    })
  }

  delUser = user => {
    if (window.confirm('Deseja realmente deletar este usuário?') === false) {
      return;
    }

    const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`, {
      headers: {
        Authorization: 'Yuri-Pinheiro-EPPS'
      }
    })

    request.then(() => {
      alert('Usuário deletado com sucesso!')
    }).catch(erro => {
      alert('Não foi possível excluir o usuário, tente novamente.', erro.message)
    })
  }

  getDetailUser = (user) => {
    const request = axios.get(urlLabenusers + '/' + user.id, headers);

    request.then((res) => {
      console.log(res);
      this.setState({ detailUser: res.data })
      this.changeDetailAndList();
    }).catch((err) => {
      console.log(err.message);
    })
  }

  changeDetailAndList = () => {
    this.setState({ pageDetailUser: !this.state.pageDetailUser })
  }

  onClickEdit = () => {
    this.setState({ buttonEditSave: !this.state.buttonEditSave })
  }

  onClickSave = () => {
    const body = {
      name: this.state.newName,
      email: this.state.newEmail
    }

    const request = axios.put(urlLabenusers + '/' + this.state.detailUser.id, body, headers);
    request.then((res) => {
      console.log(res);
      alert('Usuário alterado com sucesso!')
    }).catch((err) => {
      console.log(err);
      alert('Erro ao alterar!', err.message);
    })
    
    this.setState({ buttonEditSave: !this.state.buttonEditSave })
  }

  onChangeName = (e) => {
    this.setState({ newName: e.target.value });
  }

  onChangeEmail = (e) => {
    this.setState({ newEmail: e.target.value });
  }




  render() {
    const usuariosRenderizados = this.state.usuarios.map(user => {
      return (
        <div>
          <label key={user.id}>{user.name}
            <button onClick={() => this.delUser(user)}>X</button>
            <button onClick={() => this.getDetailUser(user)}>Detalhes</button>
          </label>
        </div>
      )
    })

    const buttonEditSave = () => {
      if (this.state.buttonEditSave) {
        return <button onClick={this.onClickSave}>Salvar</button>;
      } else {
        return <button onClick={this.onClickEdit}>Editar</button>;
      }
    }

    const editUserControls = () => {
      if (this.state.buttonEditSave) {
        return (
          <div>
            <input placeholder='Novo nome' onChange={this.onChangeName} />
            <input placeholder='Novo email' onChange={this.onChangeEmail} />
          </div>
        )
      }
    }

    const detailUser = (user) => {
      return (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          {editUserControls()}
          {buttonEditSave()}
          <button onClick={this.changeDetailAndList}>Voltar para lista</button>
        </div>
      )
    }

    return (
      <div>
        <h2>Lista de usuários</h2>
        {!this.state.pageDetailUser ? usuariosRenderizados : detailUser(this.state.detailUser)}
      </div>
    )
  }
}