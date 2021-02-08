import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { goToAllTrips } from "../Routes/Coordinator";

import img from "../../images/space6.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  height: 100vh;
`;

const DivBoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background-color: white;
`;

const InputLogins = styled(TextField)`
  width: 350px;
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
      <ThemeProvider theme={theme}>
        <DivBoxLogin>
          <InputLogins
            id="outlined-basic"
            label="Login"
            variant="outlined"
            onChange={changeEmail}
            value={email}
            color="primary"
            margin="dense"
          />
          <InputLogins
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            onChange={changeEmail}
            value={email}
            color="primary"
            onChange={changePass}
            value={pass}
            margin="dense"
            type="password"
          />
          <br />
          <Button variant="contained" color="primary" onClick={enter}>
            Entrar
          </Button>
        </DivBoxLogin>
      </ThemeProvider>
    </DivContent>
  );
}
