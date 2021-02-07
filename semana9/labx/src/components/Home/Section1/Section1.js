import React from "react";
import styled from "styled-components";
import img1 from "../../../images/space.jpg";

const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 800px;
  background-image: url(${img1});
  background-size: 100vw;
  background-position-y: center;
`;

const TitleHome = styled.h1`
  font-size: 100px;
  margin: 20px;
  color: white;
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  text-align: center;
`;

export default function Section1() {
  return (
    <DivContent>
      <TitleHome>Ja pensou em conhecer o universo?</TitleHome>
    </DivContent>
  );
}
