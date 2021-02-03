import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CardTrip from "./CardTrip";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  const tripsRenderized = trips.map((p) => {
    return (
      <CardTrip
        name={p.name}
        planet={p.planet}
        date={p.date}
        durationInDays={p.durationInDays}
        description={p.description}
      />
    );
  });

  useEffect(() => {
    console.log(trips);
    getAllTrips();
  }, []);

  return <DivContent>{tripsRenderized}</DivContent>;
}
