import React from "react";
import styled from "styled-components";

import ButtonMatches from "./MaterialUI/ButtonMatches";
import ImgMediaCard from "./MaterialUI/ImageCard";

const DivMain = styled.div`
  width: 1000px;
  height: 950px;
  margin: 20px;
  background-color: #fdf0f6;
`;

const BarHeader = styled.div`
  display: flex;
  background-color: #000000;
  color: white;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  font-size: 2rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
`;

export default function MatchCard() {
  return (
    <DivMain>
      <BarHeader>
        <p>Astromatch</p>
        <ButtonMatches />
      </BarHeader>
      <ImgMediaCard />
    </DivMain>
  );
}
