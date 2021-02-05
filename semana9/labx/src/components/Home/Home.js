import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../Routes/Coordinator";
import axios from "axios";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const cadastrar = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuri-pinheiro/signup`;
    const body = {
      email: email,
      password: pass,
    };
    const request = axios.post(url, body);

    request
      .then((res) => {
        setEmail('');
        setPass('');
        console.log(res);
      })
      .catch((err) => {
        alert('Erro ao cadastrar :(')
        console.log(err);
      });
  };

  const changePass = (e) => {
    setPass(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <DivContent>
      <TitleHome> Inscreva-se para embarcar nessa viagem!</TitleHome>
      <DivForm>
          <p>Email</p>
          <input
            type="text"
            placeholder="Insira seu e-mail"
            onChange={changeEmail}
            value={email}
          />
          <p>Senha</p>
          <input
            type="text"
            placeholder="Nova senha"
            onChange={changePass}
            value={pass}
          />
          <br />
          <button  onClick={cadastrar}>Cadastrar!</button>
      </DivForm>

      <p>
        Já é cadastrado? Faça login{" "}
        <a href="" onClick={() => goToLogin(history)}>
          aqui
        </a>
      </p>
    </DivContent>
  );
}
