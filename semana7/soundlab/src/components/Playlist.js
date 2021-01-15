import React from 'react'
import axios from 'axios'
import { URL, headerAPI } from './configApi'

export default class Playlist extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
    this.getPlaylists();
  }

  getPlaylists = () => {
    const request = axios.get(URL, headerAPI);
    request.then((res) => {
      console.log(res.data.result.list);
      this.setState({ playlists: res.data.result.list });
    }).catch((err) => {
      console.log(err.message);
    })
  }

  renderPlaylists = () => {
    this.state.playlists.map(p => {
      return (
        <div>
          <div>{p.name}</div>
          <button onClick={() => this.deletePlaylist(p)}>X</button>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Todas as suas playlists criadas</h1>
      </div>
    )
  }
}