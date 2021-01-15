import React from 'react'
import axios from 'axios'
import { headerAPI, URL } from './configApi'

export default class NewPlaylist extends React.Component {
  state = {
    namePlaylist: ''
  }

  inputNamePlaylist = (e) => {
    this.setState({ namePlaylist: e.target.value })
  }

  savePlaylist = () => {
    const body = {
      name: this.state.namePlaylist
    }
    const request = axios.post(URL, body, headerAPI)

    request.then((res) => {
      alert('Playlist salva com sucesso!')
      console.log(res);
    }).catch((err) => {
      alert(err.message);
    })
  }

  render() {
    return (
      <div>
        <h1>Criar playlist</h1>
        <p>Nome da playlist</p>
        <input type="text" placeholder="Nome da playlist" onChange={this.inputNamePlaylist} />
        <button onClick={this.savePlaylist}>Salvar</button>

      </div>
    )
  }
}