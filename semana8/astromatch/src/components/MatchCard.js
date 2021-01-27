import React from 'react'
import '../App.css'
import styled from 'styled-components'
import '../fonts/roboto/Roboto.css'

const DivMain = styled.div`
width: 1000px;
height: 950px;
margin: 20px;
background-color: #fdf0f6;
`

const BarHeader = styled.div`
display: flex;
background-color: #000000;
color: white;
align-items: center;
justify-content: center;
height: 50px;
font-size: 1.6rem;
font-family: 'Roboto-Regular', sans-serif;
`


export default function MatchCard () {
  return (
   <DivMain>
    <BarHeader> Astromatch </BarHeader>
   </DivMain>
  );
}