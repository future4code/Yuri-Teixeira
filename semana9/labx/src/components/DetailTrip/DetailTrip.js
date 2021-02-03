import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


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

export default function DetailTrip() {
  const { trip } = useParams();

  console.log(trip);
  return (
    <DivContent>
      <DivHeader>
        {trip.name}
        <button onClick={trip.detailsTrip}>Detalhes</button>
      </DivHeader>
      <DivDetail>Planeta: {trip.planet}</DivDetail>
      <DivDetail>Data: {trip.date}</DivDetail>
      <DivDetail>Duração em dias: {trip.durationInDays}</DivDetail>

      <DivDescription>Descrição: {trip.description}</DivDescription>
      <div>lksdjfhgolaksjdhgf</div>
    </DivContent>
  );
}
