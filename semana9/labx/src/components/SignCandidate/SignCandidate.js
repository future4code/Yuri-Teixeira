import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import UseForm from "../../Hooks/UseForm";
import { goToDetailTrip } from "../Routes/Coordinator";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
`;

const DivContentForm = styled.div`
  background-color: white;
  width: 900px;
  padding: 0px 40px;
  height: 700px;
  border-radius: 5px;
`;

const FormCreateTrip = styled.form`
  display: flex;
  flex-direction: column;
  > input {
    width: 500px;
  }
`;

const Title = styled.p`
  font-size: 40px;
  margin: 20px;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  text-align: center;
`;

const Inputs = styled(TextField)``;

export default function SignCandidate() {
  const { id } = useParams();
  const history = useHistory();

  const [form, onChange, clearFields] = UseForm({
    name: "",
    age: Number,
    applicationText: "",
    profession: "",
    country: "",
  });

  const saveCandidate = (event) => {
    event.preventDefault();
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuri-pinheiro/trips/${id}/apply`;
    axios
      .post(url, form)
      .then((res) => {
        console.log(res);
        clearFields();
        goToDetailTrip(history, id);
      })
      .catch((err) => {
        alert("Não foi possível salvar seu cadastro :(");
        console.log(err);
      });
  };

  return (
    <DivContent>
      <ThemeProvider theme={theme}>
        <DivContentForm>
          <Title>Formulário de inscrição</Title>
          <FormCreateTrip action="" onSubmit={saveCandidate}>
            <Inputs
              required
              id="standard-required"
              label="Nome completo"
              name="name"
              onChange={onChange}
              value={form.name}
              defaultValue={form.name}
            />
            <Inputs
              required
              name="country"
              onChange={onChange}
              value={form.country}
              id="standard-required"
              label="País de origem"
              type="text"
            />
            <Inputs
              required
              name="age"
              onChange={onChange}
              value={form.age}
              id="standard-required"
              label="Idade"
              type="number"
            />
            <Inputs
              required
              name="profession"
              onChange={onChange}
              value={form.profession}
              id="standard-required"
              label="Profissão"
              type="text"
            />
            <Inputs
              required
              name="applicationText"
              onChange={onChange}
              value={form.applicationText}
              id="standard-required"
              label="Por que você deve ir ?"
              type="text"
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Embarcar!
            </Button>
          </FormCreateTrip>
        </DivContentForm>
      </ThemeProvider>
    </DivContent>
  );
}
