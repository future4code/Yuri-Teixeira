import React from "react";
import styled from "styled-components";
import img from "../../../images/space2.jpg";

const DivContent = styled.div`
  background-color: black;
`;

const TitleHome = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100vw;
  color: white;

  > p {
    font-weight: 300;
    font-family: "Barlow", sans-serif;
    text-align: center;
    font-size: 60px;
    margin: 0px 100px;
  }
`;

export default function Section3() {
  return (
    <DivContent>
      <TitleHome>
        <p>Seja um voluntário e participe de nossas viagens interestelares!</p>
      </TitleHome>
    </DivContent>
  );
}
