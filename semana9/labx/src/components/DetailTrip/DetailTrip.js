import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { goToLogin, goToSignCandidate } from "../Routes/Coordinator";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 800px;
  margin: 10px 0px;
`;

const DivHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #0c7b93;
  color: white;
  height: 50px;
  align-items: center;
  justify-content: space-between;

  > button {
    height: 100%;
    width: 120px;
    background-color: #00a8cc;
    border-style: none;
    cursor: pointer;
  }
`;

const DivDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  padding: 2px;
  min-height: 35px;
`;

const DivDescription = styled.div`
  display: flex;
  border: 1px solid black;
  height: 35px;
  min-height: 200px;
`;

const ButtonSign = styled.button`
height: 50px;
`

export default function DetailTrip() {
  const { id } = useParams();
  const [detailTrip, setDetailTrip] = useState({});
  const history = useHistory();

  const getDetailTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuri-pinheiro/trip/${id}`;
    axios
      .get(url, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setDetailTrip(res.data.trip);
      })
      .catch((err) => {
        console.log("Erro de getDetailTrip", err.message);
      });
  };

  const renderCandidates = () => {
    if (
      typeof detailTrip.candidates === "object" &&
      detailTrip.candidates.length > 0
    ) {
      return detailTrip.candidates.map((p) => {
        return (
          <div key={p.id}>
            <DivDetail>Nome: {p.name}</DivDetail>
            <DivDetail>Idade: {p.age}</DivDetail>
            <DivDetail>País: {p.country}</DivDetail>
            <DivDetail>Profissão: {p.profession}</DivDetail>
            <DivDetail>Sobre mim: {p.applicationText}</DivDetail>
            <DivDetail>***********************************</DivDetail>
          </div>
        );
      });
    } else {
      return <div>Ainda não há candidatos a essa viagem.</div>;
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      goToLogin(history);
    }
    getDetailTrip();
  }, []);

  return (
    <Div>
      <DivContent>
        <DivHeader>{detailTrip.name}</DivHeader>
        <DivDetail>Planeta: {detailTrip.planet}</DivDetail>
        <DivDetail>Data: {detailTrip.date}</DivDetail>
        <DivDetail>Duração em dias: {detailTrip.durationInDays}</DivDetail>

        <DivDescription>Descrição: {detailTrip.description}</DivDescription>
        <DivHeader>Passageiros</DivHeader>
        {renderCandidates()}
        <ButtonSign onClick={() => {goToSignCandidate(history,id)}}>Entrar nessa viagem!</ButtonSign>
      </DivContent>
    </Div>
  );
}
