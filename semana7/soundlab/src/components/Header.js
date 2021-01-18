import React from 'react'
import styled from 'styled-components'

const DivHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1.4rem;
font-weight: 600;
color: #eeeeee;
background-color: #303841;
width: 70vw;
height: 50px;
padding: 0px 10px;
`
const UlMenu = styled.ul`
display: flex;
list-style: none;
`
const MenuItem = styled.button`
margin: 5px;
padding: 5px;
font-size: 1.3rem;
color: #eeeeee;
background-color:#303841;
border-style: none;
`


export default class Header extends React.Component {
  state = {

  }

  render() {
    return (
      <DivHeader>
        <MenuItem onClick={this.props.menuMainPage}>Página inicial</MenuItem>
        <UlMenu>
          <li><MenuItem onClick={this.props.menuNewPlaylist}>Criar playlist</MenuItem></li>
          <li><MenuItem onClick={this.props.menuPlaylist}>Todas playlists</MenuItem></li>
        </UlMenu>
      </DivHeader>
    )
  }
}