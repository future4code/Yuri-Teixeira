import React from 'react';
import styled from 'styled-components'
import './App.css';
import Post from './components/Post/Post';

const DivFormulario = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
background-color: lightgray;
padding: 5px;
`

class App extends React.Component {
  state = {
    posts: [{
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Foguin',
      fotoUsuario: 'https://picsum.photos/52/500',
      fotoPost: 'https://picsum.photos/201/150'
    },
    {
      nomeUsuario: 'Maranhão',
      fotoUsuario: 'https://picsum.photos/501/502',
      fotoPost: 'https://picsum.photos/200/103'
    }],
    nomeUsuario: '',
    fotoUsuario: '',
    fotoPost: ''
  }

  render() {
    const feed = this.state.posts.map(p => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost} 
        />
      )
    })

    const newPost = () => {
      let novoPost = {
        nomeUsuario: this.state.nomeUsuario,
        fotoUsuario: this.state.fotoUsuario,
        fotoPost: this.state.fotoPost
      }

      this.setState({ posts: [novoPost, ...this.state.posts] })
    }

    const onChangeNome = (e) => {
      this.setState({ nomeUsuario: e.target.value })
    }
    const onChangeFotoPerfil = (e) => {
      this.setState({ fotoUsuario: e.target.value })
    }
    const onChangeFotoPost = (e) => {
      this.setState({ fotoPost: e.target.value })
    }

    return (
      <div className={'app-container'}>
        <DivFormulario>
          <label htmlFor="nome">Nome</label>
          <input type="text" onChange={onChangeNome} />

          <label htmlFor="fotoPerfil">fotoPerfil</label>
          <input type="text" onChange={onChangeFotoPerfil} />

          <label htmlFor="fotoPost">fotoPost</label>
          <input type="text" onChange={onChangeFotoPost} />

          <button onClick={() => newPost()}>Postar!</button>
        </DivFormulario>
        {feed}
      </div>
    );
  }
}

export default App;
