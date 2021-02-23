import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
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

export default function AproveCandidates() {
  const [trips, setTrips] = useState([]);
  const [detailsTrip, setDetailsTrip] = useState([]);

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
          setDetailsTrip(res.data.trip);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    console.log("executing getCandidates", detailsTrip);
  };

  const candidatesRenderized = detailsTrip[0] && detailsTrip.map((trip) => {
    return (
      <div>
        <DivHeader>{trip.name}</DivHeader>
      </div>
    );
  });

  useEffect(() => {
    getTrips();
  }, []);

  useEffect(() => {
    getCandidates();
  }, [trips]);

  return (
    <>
      <div>{candidatesRenderized}</div>
      <button
        onClick={() => {
          console.log(detailsTrip);
        }}
      >
        detailsTrip
      </button>
    </>
  );
}
