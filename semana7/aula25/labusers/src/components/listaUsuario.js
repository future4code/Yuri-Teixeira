import React from 'react'
import axios from 'axios'

export default class ListaUsuarios extends React.Component {
  state = {
    usuarios: []
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

  confirmDelUser(user) {
    if (window.confirm('Deseja realmente deletar este usuário?')) {
      this.delUser(user);
    } else {
      alert('Operação abortada');
    }
  }

  componentDidMount = () => {
    this.getUsers();
  }

  componentDidUpdate = () => {
    this.getUsers();
  }



  render() {
    const usuariosRenderizados = this.state.usuarios.map(user => {
      return (
        <div>
          <label key={user.id}>{user.name}
            <button onClick={() => this.confirmDelUser(user)}>X</button>
          </label>
        </div>
      )
    })

    return (
      <div>
        <h2>Usuários</h2>
        {usuariosRenderizados}
      </div>
    )
  }
}