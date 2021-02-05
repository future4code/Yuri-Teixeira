import React from "react";
import styled from "styled-components";
import axios from "axios";
import UseForm from "../../Hooks/UseForm";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormCreateTrip = styled.form`
  display: flex;
  flex-direction: column;
  >input{
    width: 500px;
  }
`;

export default function CreateTrip() {
  const [form, onChange, clearFields] = UseForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (event) => {
    event.preventDefault();
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuri-pinheiro/trips";
    const body = form;
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    console.log(form);

    axios
      .post(url, body, headers)
      .then((res) => {
        console.log("trip criada com sucesso!", res);
      })
      .catch((err) => {
        console.log(err);
      });

    clearFields();
  };

  return (
    <DivContent>
      <FormCreateTrip onSubmit={createTrip}>
        <input
          required
          type="text"
          name="name"
          onChange={onChange}
          value={form.name}
          placeholder="Nome da viagem"
        />
        <input
          required
          type="text"
          name="planet"
          onChange={onChange}
          value={form.planet}
          placeholder="Planeta"
        />
        <input
          required
          type="date"
          name="date"
          onChange={onChange}
          value={form.date}
          placeholder="Data"
        />
        <input
          required
          type="text"
          name="description"
          onChange={onChange}
          value={form.description}
          placeholder="Descrição"
        />
        <input
          type="number"
          name="durationInDays"
          onChange={onChange}
          value={form.durationInDays}
          placeholder="Duração em dias"
        />
        <button>Salvar!</button>
      </FormCreateTrip>
    </DivContent>
  );
}
