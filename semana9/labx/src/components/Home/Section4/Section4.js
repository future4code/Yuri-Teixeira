import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CardTrip from "../../AllTrips/CardTrip";
import axios from "axios";
import { goToDetailTrip } from "../../Routes/Coordinator";
import img from '../../../images/space6.png';

const DivContent = styled.div`
  background-color: black;
  width: 100vw;
  height: 1800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom;
`;

const Title = styled.p`
  color: white;
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  font-size: 60px;
  margin-top: 100px;
  margin-bottom: 30px;
`;

export default function FormRegist() {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  const getAllTrips = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuri-pinheiro/trips"
    );

    request
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const tripsRenderized = trips.slice(0, 3).map((trip) => {
    return (
      <CardTrip
        id={trip.id}
        key={trip.id}
        name={trip.name}
        planet={trip.planet}
        date={trip.date}
        durationInDays={trip.durationInDays}
        description={trip.description}
        detailsTrip={() => goToDetailTrip(history, trip.id)}
      />
    );
  });

  useEffect(() => {
    getAllTrips();
  }, []);

  return (
    <DivContent>
      <Title>Algumas de nossas viagens</Title>
      {tripsRenderized}
    </DivContent>
  );
}
