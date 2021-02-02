import React from "react";
import styled from "styled-components";

const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleHome = styled.h1`
  font-size: 1.5rem;
  margin: 20px;
`;

const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <DivContent>
      <TitleHome> Inscreva-se para embarcar nessa viagem!</TitleHome>
      <DivForm>
        <form action="">
          <p>Email</p>
          <input type="text" placeholder="Insira seu e-mail" />
          <p>Senha</p>
          <input type="text" placeholder="Nova senha" />
          <br />
          <button type="submit">Cadastrar!</button>
        </form>
      </DivForm>

      <p>
        Já é cadastrado? Faça login <a href="">aqui</a>!
      </p>
    </DivContent>
  );
}
