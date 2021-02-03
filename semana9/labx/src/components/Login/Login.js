import React from "react";
import styled from "styled-components";

const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivBoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 500px;
  height: 500px;
  margin-top: 150px;
`;

export default function Login() {
  return (
    <DivContent>
      <DivBoxLogin>
        <p>Login</p>
        <input type="text" />
        <p>Senha</p>
        <input type="text" />
        <br />
        <button type="text">Entrar</button>
      </DivBoxLogin>
    </DivContent>
  );
}
