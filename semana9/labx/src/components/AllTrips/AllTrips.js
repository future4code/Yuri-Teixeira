import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CardTrip from "./CardTrip";
import { useHistory } from "react-router-dom";
import { goToDetailTrip } from "../Routes/Coordinator";
import DetailTrip from "../DetailTrip/DetailTrip";

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

  const history = useHistory();

  let tripsRenderized = trips.map((trip) => {
    return (
      <CardTrip
        name={trip.name}
        planet={trip.planet}
        date={trip.date}
        durationInDays={trip.durationInDays}
        description={trip.description}
        detailsTrip={() => goToDetailTrip(history, trip)}
      />
    );
  });

  useEffect(() => {
    console.log("primeira busca de trips", trips);
    getAllTrips();
  }, []);

  return (
    <>
      <DivContent>{tripsRenderized}</DivContent>
    </>
  );
}
