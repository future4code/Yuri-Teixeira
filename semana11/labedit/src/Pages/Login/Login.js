import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Login() {
  const history = useHistory();
  return (
    <DivContent>
      <p>Página de login</p>
      <input placeholder="Email" type="email" />
      <input placeholder="Senha" type="password" />
      <button type="submit">Entrar</button>
      <p>
        Clique <a href="/signup">aqui</a> para se cadastrar.
      </p>
    </DivContent>
  );
}
