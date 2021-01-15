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
    page: 'Main'
  }

  PageRenderized = () => {
    return (
      <Playlist />
    );
  }

  render() {
    return (
      <DivMain>
        <Header />
        <DivBody content={this.PageRenderized()} />
      </DivMain>
    )
  }
}