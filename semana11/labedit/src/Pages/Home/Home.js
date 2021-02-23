import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: center;
`;

const DivNewPost = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  padding: 10px;
  width: 600px;
  height: 150px;

  > input {
    height: 100px;
    width: 550px;
  }

  > button {
    width: 550px;
  }
`;

export default function Home() {
  return (
    <DivContent>
      <DivNewPost>
        <input placeholder="Novo post" />
        <button>Postar</button>
      </DivNewPost>
    </DivContent>
  );
}
