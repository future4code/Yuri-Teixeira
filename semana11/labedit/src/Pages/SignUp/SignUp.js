import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import useForm from "../../Hooks/useForm";

import { goToHome } from "../../Routes/Coordinator";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function SignUp() {
  const [form, onChange, clearFields] = useForm({
    email: "",
    password: "",
    username: "",
  });
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup";
  const history = useHistory();

  const newUser = () => {
    axios
      .post(url, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Usuário cadastrado");
        goToHome(history);
        console.log(res);
        clearFields();
      })
      .catch((err) => {
        console.log(form);
        console.log(err.message);
      });
  };

  return (
    <DivContent>
      <p>Página de cadastro</p>

      <input
        placeholder="Usuário"
        onChange={onChange}
        value={form.username}
        name="username"
      />
      <input
        placeholder="Email"
        type="email"
        onChange={onChange}
        value={form.email}
        name="email"
      />
      <input
        placeholder="Senha"
        type="password"
        onChange={onChange}
        value={form.password}
        name="password"
      />

      <button type="submit" onClick={newUser}>
        Cadastrar
      </button>
    </DivContent>
  );
}
