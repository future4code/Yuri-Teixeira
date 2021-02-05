import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import UseForm from "../../Hooks/UseForm";
import { goToDetailTrip } from "../Routes/Coordinator";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormCreateTrip = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  > input {
    width: 500px;
  }
`;

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
      <FormCreateTrip action="" onSubmit={saveCandidate}>
        <input
          // required
          type="text"
          name="name"
          onChange={onChange}
          value={form.name}
          placeholder="Nome"
        />
        <input
          // required
          type="number"
          name="age"
          onChange={onChange}
          value={form.age}
          placeholder="Idade"
        />
        <input
          // required
          type="text"
          name="applicationText"
          onChange={onChange}
          value={form.applicationText}
          placeholder="Por que você deve ir?"
        />
        <input
          // required
          type="text"
          name="profession"
          onChange={onChange}
          value={form.profession}
          placeholder="Profissão"
        />
        <input
          // required
          type="text"
          name="country"
          onChange={onChange}
          value={form.country}
          placeholder="País"
        />
        <button>Inscrever-se!</button>
      </FormCreateTrip>
    </DivContent>
  );
}
