import React from "react";
import styled from "styled-components";

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
  align-items: center;
  border: 1px solid black;
  height: 35px;
`;
const DivDescription = styled.div`
  display: flex;
  border: 1px solid black;
  height: 35px;
  min-height: 200px;
`;

export default function AllTrips(props) {
  return (
    <DivContent>
      <DivHeader>
        {props.name}
        <button onClick={props.detailsTrip}>Detalhes</button>
      </DivHeader>
      <DivDetail>Planeta: {props.planet}</DivDetail>
      <DivDetail>Data: {props.date}</DivDetail>
      <DivDetail>Duração em dias: {props.durationInDays}</DivDetail>

      <DivDescription>Descrição: {props.description}</DivDescription>
    </DivContent>
  );
}
