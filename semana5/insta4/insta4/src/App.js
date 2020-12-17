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
    }]
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

    const newPost = (nome, fotoPerfil, fotoPost) => {
      let novoPost = {
        nomeUsuario: nome,
        fotoUsuario: fotoPerfil,
        fotoPost: fotoPost
      }

      let novoArray = [novoPost];
      this.setState({ posts: [...this.state.posts, novoArray] })
    }

    return (
      <div className={'app-container'}>
        <DivFormulario>
          <label htmlFor="nome">Nome</label>
          <input type="text" id='nome' value='aaa'/>

          <label htmlFor="fotoPerfil">fotoPerfil</label>
          <input type="text" id='fotoPerfil' value='https://picsum.photos/50/50'/>

          <label htmlFor="fotoPost">fotoPost</label>
          <input type="text" id='fotoPost' value='https://picsum.photos/50/50'/>

          <button onClick={() => newPost(
          'aaa', 
          'https://picsum.photos/50/50',
          'https://picsum.photos/50/50')}
          >Postar!</button>
        </DivFormulario>
        {feed}
      </div>
    );
  }
}

export default App;
