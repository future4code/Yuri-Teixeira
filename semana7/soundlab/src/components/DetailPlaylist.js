import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { headerAPI, getTracksUrl } from './configApi'

const DivAddTrack = styled.div`
display:flex;
flex-direction: column;
`

export default class DetailPlaylist extends React.Component {
  state = {
    artist: '',
    track: '',
    url: ''
  }

  addTrackToPlaylist = (id) => {
    const body = {
      name: this.state.track,
      artist: this.state.artist,
      url: this.state.url
    }
    const request = axios.post(getTracksUrl(id), body, headerAPI);

    request.then((res) => {
      alert('Música adicionada com sucesso!');
      console.log(res);
    }).catch((err) => {
      alert('Não foi possivel adicionar :(', err.message);
    })
  }

  onChangeArtist = (e) => {
    this.setState({ Artist: e.target.value })
  }
  onChangeTrack = (e) => {
    this.setState({ Track: e.target.value })
  }
  onChangeUrl = (e) => {
    this.setState({ Url: e.target.value })
  }

  render() {

    return (
      <div>
        <DivAddTrack>
          <input type="text" placeholder='Artista' onChange={this.onChangeArtist} />
          <input type="text" placeholder='Nome da música' onChange={this.onChangeTrack} />
          <input type="text" placeholder='URL' onChange={this.onChangeUrl} />
          <button onClick={() => this.addTrackToPlaylist(this.props.idPlaylist)}>Salvar</button>
        </DivAddTrack>
        <h1>{this.props.namePlaylist}</h1>
        {this.props.tracks.map(p => {
          return (
            <div>
              <p>{p.artist} - {p.name}</p>
              <audio src={p.url} controls="controls" />
              <button onClick={this.props.deleteTrack}>X</button>
            </div>
          )
        })}
        <button onClick={this.props.backPlaylists}>Voltar</button>
      </div>
    )
  }
}