import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function AproveCandidates() {
  const [trips, setTrips] = useState([]);
  const [tripCandidates, setTripCandidates] = useState({});

  const getTrips = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuri-pinheiro/trips";

    axios
      .get(url)
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCandidates = () => {
    trips.map((trip) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuri-pinheiro/trip/${trip.id}`;
      const headers = {
        headers: {
          auth: localStorage.getItem("token"),
        },
      };

      axios
        .get(url, headers)
        .then((res) => {
          console.log(res.data.trip.name);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getTrips();
    getCandidates();
  }, []);

  return <button onClick={getCandidates}>aaa</button>;
}
