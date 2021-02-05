import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { goToAllTrips } from "../Routes/Coordinator";

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
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const changePass = (e) => {
    setPass(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const enter = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuri-pinheiro/login`;
    const body = {
      email: email,
      password: pass,
    };
    const request = axios.post(url, body);

    request
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          goToAllTrips(history);
        }
      })
      .catch((err) => {
        alert("Não foi possível fazer login :(");
        console.log(err);
      });
  };

  return (
    <DivContent>
      <DivBoxLogin>
        <p>Login</p>
        <input type="email" onChange={changeEmail} value={email} />
        <p>Senha</p>
        <input type="text" onChange={changePass} value={pass} />
        <br />
        <button onClick={enter}>Entrar</button>
      </DivBoxLogin>
    </DivContent>
  );
}
