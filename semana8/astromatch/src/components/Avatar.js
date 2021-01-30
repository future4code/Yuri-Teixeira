import React from "react";
import styled from "styled-components";

const DivContent = styled.div`
  display: flex;
  height: 100px;
  background-color: #ed5696;
  align-items: center;
  color: black;
`;

const DivImg = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
`;

const ImgAvatar = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
`;

const Pname = styled.p`
  font-size: 2rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin-left: 10px;
`;

export default function Avatar(props) {
  return (
    <DivContent>
      <DivImg>
        <ImgAvatar src={props.image} />
      </DivImg>
      <Pname>{props.name}</Pname>
    </DivContent>
  );
}
