import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { goToSignCandidate } from "../Routes/Coordinator";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0px;
  background-color: black;
  border: 3px solid white;
`;

const DivHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  height: 50px;
  align-items: center;
  justify-content: space-between;

  > div {
    margin-left: 15px;
    font-family: "Oswald", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
`;

const Details = styled(ArrowForwardIosIcon)`
padding: 12px 20px;
  :hover {
    background-color: white;
    color: black;
  }
`;

const DivDetail = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 35px;
  color: white;
  margin-left: 15px;
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
`;
const DivDescription = styled.div`
  display: flex;
  border: 1px solid black;
  height: 35px;
  min-height: 200px;
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
  margin-left: 15px;
`;

const ButtonSign = styled.button`
  font-family: "Oswald", sans-serif;
  cursor: pointer;
  height: 50px;
  width: 806px;
  background-color: black;
  color: white;
  border: 3px solid white;
  border-top: 0px;
  margin-bottom: 50px;

  :hover {
    background-color: white;
    color: black;
  }
`;

const Line = styled.hr`
  height: 1px;
  background-color: white;
`;

export default function AllTrips(props) {
  const history = useHistory();

  return (
    <>
      <DivContent>
        <DivHeader>
          <div>{props.name}</div>
          <IconContent>
            <Details onClick={props.detailsTrip}>Detalhes</Details>
          </IconContent>
        </DivHeader>
        <DivDetail>Planeta: {props.planet}</DivDetail>
        <DivDetail>Data: {props.date}</DivDetail>
        <DivDetail>Duração em dias: {props.durationInDays}</DivDetail>
        <Line />
        <DivDescription>Descrição: {props.description}</DivDescription>
      </DivContent>
      <ButtonSign
        onClick={() => {
          goToSignCandidate(history, props.id);
        }}
        variant="contained"
      >
        Quero me inscrever!
      </ButtonSign>
    </>
  );
}
