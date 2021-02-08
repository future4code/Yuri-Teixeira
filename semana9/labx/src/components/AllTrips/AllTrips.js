import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CardTrip from "./CardTrip";
import { useHistory } from "react-router-dom";
import { goToDetailTrip } from "../Routes/Coordinator";
import img from "../../images/space6.png";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom;
`;

export default function AllTrips() {
  const [trips, setTrips] = useState([]);

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

  const history = useHistory();

  const tripsRenderized = trips.map((trip) => {
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
    <>
      <DivContent>{tripsRenderized}</DivContent>
    </>
  );
}
