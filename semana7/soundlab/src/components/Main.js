import React from 'react'
import styled from 'styled-components'

//Components
import Header from './Header'
import DivBody from './DivBody'
import NewPlaylist from './NewPlaylist'
import Playlist from './Playlist'

const DivMain = styled.div`
justify-content: center;
background-color: #eeeeee;
height: 100vh -50px;
`

export default class Main extends React.Component {
  state = {
    page: 'NewPlaylist'
  }

  PageRenderized = () => {
    switch (this.state.page) {
      case 'Main':
        return <div>Esta é a main</div>
      case 'NewPlaylist':
        return <NewPlaylist />
      case 'Playlist':
        return <Playlist />
    }
  }

  menuMainPage = () => {
    this.setState({page: 'Main'})
  }

  menuNewPlaylist = () => {
    this.setState({page: 'NewPlaylist'})
  }

  menuPlaylist = () => {
    this.setState({page: 'Playlist'})
  }


  render() {
    return (
      <DivMain>
        <Header 
        menuMainPage={this.menuMainPage}
        menuNewPlaylist={this.menuNewPlaylist}
        menuPlaylist={this.menuPlaylist}/>
        
        <DivBody content={this.PageRenderized()} />
      </DivMain>
    )
  }
}