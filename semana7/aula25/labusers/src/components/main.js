import React from 'react'
import NewUser from './newUser'
import UserList from './userList'

export default class Main extends React.Component {
  state = {
    currentPage: 'NewUser'
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'NewUser':
        return <NewUser />;
      case 'UserList':
        return <UserList />
      default:
        return <p>Erro ao renderizar!</p>
    }
  }

  changePage = () => {
    if (this.state.currentPage === 'NewUser') {
      this.setState({ currentPage: 'UserList' })
    } else if (this.state.currentPage === 'UserList') {
      this.setState({ currentPage: 'NewUser' })
    }
  }

  nameButton = () => {
    switch (this.state.currentPage) {
      case 'NewUser':
        return 'Lista de usuários';
      case 'UserList':
        return 'Criar usuário';
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
        <button onClick={this.changePage}>{this.nameButton()}</button>
      </div>
    )
  }
}