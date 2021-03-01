import React from 'react'
import styled from 'styled-components'
import img from "../../../images/space3.jpg";

const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 800px;
  background-image: url(${img});
  background-size: 100vw;
  background-position-y: center;
`;

const TitleHome = styled.h1`
  font-size: 80px;
  margin: 20px;
  color: white;
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  text-align: center;
`;

export default function Section2 () {
  return (
   <DivContent>
            <TitleHome>Presenciar um buraco negro de perto ?</TitleHome>
   </DivContent>
  );
}