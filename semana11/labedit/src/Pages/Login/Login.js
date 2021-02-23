import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
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

export default function Login() {
  const history = useHistory();
  const [form, onChange, clearFields] = useForm({
    email: "",
    password: "",
  });

  const signIn = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login";
    axios
      .post(url, form)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        goToHome(history);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DivContent>
      <p>Página de login</p>
      <input
        placeholder="Email"
        type="email"
        onChange={onChange}
        name="email"
        value={form.email}
        required
      />
      <input
        placeholder="Senha"
        type="password"
        onChange={onChange}
        name="password"
        value={form.password}
        required
      />
      <button type="submit" onClick={signIn}>
        Entrar
      </button>
      <p>
        Clique <a href="/signup">aqui</a> para se cadastrar.
      </p>
    </DivContent>
  );
}
