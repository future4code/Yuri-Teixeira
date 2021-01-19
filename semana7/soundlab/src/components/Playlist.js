import React from 'react'
import axios from 'axios'
import { URL, headerAPI, deletePlaylistUrl, getTracksUrl, deleteTracksUrl } from './configApi'
import DetailPlaylist from './DetailPlaylist'

export default class Playlist extends React.Component {
  state = {
    playlists: [],
    infoPlaylist: [],
    tracksPlaylist: [],
    viewDetailPlaylist: false
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

  deletePlaylist = (id) => {
    const request = axios.delete(deletePlaylistUrl(id), headerAPI);

    request.then((res) => {
      console.log(res);
      alert('Playlist excluída com sucesso!')
      this.getPlaylists();
    }).catch((err) => {
      alert('Houve erro ao excluir a playlist :(')
    })
  }

  getDetailsPlaylist = (playlist) => {
    const request = axios.get(getTracksUrl(playlist.id), headerAPI)

    request.then((res) => {
      console.log(res);
      this.setState({ tracksPlaylist: res.data.result.tracks, infoPlaylist: playlist, viewDetailPlaylist: true })
    }).catch((err) => {
      console.log(err);
    })
  }

  deleteTrack = (idTrack) => {
    const request = axios.delete(deleteTracksUrl(infoPlaylist.id, idTrack), headerAPI);

    request.then((res) => {
      console.log(res.message);
    }).catch((err) => {
      console.log(err.message);
    })
  }

  backPlaylists = () => {
    this.setState({ viewDetailPlaylist: false })
  }

  render() {
    const renderPlaylists = this.state.playlists.map(p => {
      return (
        <div>
          <div>{p.name}</div>
          <button onClick={() => this.deletePlaylist(p.id)}>X</button>
          <button onClick={() => this.getDetailsPlaylist(p)}>Detalhes</button>
        </div>
      )
    })

    const renderDetailPlaylist = () => {
      return (
        <DetailPlaylist
          namePlaylist={this.state.infoPlaylist.name}
          tracks={this.state.tracksPlaylist}
          backPlaylists={this.backPlaylists}
          idPlaylist={this.state.infoPlaylist.id}
          deleteTrack={this.deleteTrack} />
      )
    }

    return (
      <div>
        <h1>Todas as suas playlists criadas</h1>
        {this.state.viewDetailPlaylist ? renderDetailPlaylist() : renderPlaylists}
      </div>
    )
  }
}