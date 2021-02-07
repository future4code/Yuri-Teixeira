import React from "react";
import styled from "styled-components";
import img from "../../../images/space5.jpg";

const DivContent = styled.div`
  background-color: black;
`;

const TitleHome2 = styled.div`
  font-weight: 300;
  margin-top: 30px;
  text-align: center;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-image: url(${img});

  > p {
    margin: 0px 150px;
    font-size: 50px;
    color: white;
    font-family: "Barlow", sans-serif;
  }
`;

export default function Section5() {
  return (
    <DivContent>
      <TitleHome2>
        <p>
          Organização sem fins lucrativos, apenas procuramos pessoas que
          acreditam nessa experiência ;D
        </p>
      </TitleHome2>
    </DivContent>
  );
}
