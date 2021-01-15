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
const MenuItem = styled.a`
margin: 5px;
padding: 5px;
text-decoration: none;
color: #eeeeee;
`


export default class Header extends React.Component {
  state = {

  }

  render() {
    return (
      <DivHeader>
        <MenuItem href="">Página inicial</MenuItem>
        <UlMenu>
          <li><MenuItem href="">Criar playlist</MenuItem></li>
          <li><MenuItem href="">Todas playlists</MenuItem></li>
        </UlMenu>
      </DivHeader>
    )
  }
}