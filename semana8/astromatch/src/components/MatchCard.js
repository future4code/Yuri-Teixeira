import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { apiUrl, choosePersonUrl } from "../Connection/connection";

import ButtonMatches from "./MaterialUI/ButtonMatches";
import ImgMediaCard from "./MaterialUI/ImageCard";
import ButtonLike from "./MaterialUI/ButtonLike";
import ButtonUnlike from "./MaterialUI/ButtonUnlike";

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 950px;
  margin: 20px;
  background-color: #fdf0f6;
`;

const BarHeader = styled.div`
  display: flex;
  background-color: #000000;
  color: white;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  font-size: 2rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
`;

const DivButtonLike = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function MatchCard() {
  let [profile, setProfile] = useState([]);

  const getProfile = () => {
    const request = axios.get(apiUrl);

    request
      .then((res) => {
        setProfile((profile = res.data.profile));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const choosePerson = () => {
    const body = {
      id: profile.id,
      choice: true,
    };

    const request = axios.post(choosePersonUrl, body);
    request
      .then((res) => {
        if (res.data.isMatch) {
          alert("Essa pessoa também deu match");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    getProfile();
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <DivMain>
      <BarHeader>
        <p>Astromatch</p>
        <ButtonMatches />
      </BarHeader>
      <ImgMediaCard
        image={profile.photo}
        name={profile.name}
        age={profile.age}
        bio={profile.bio}
      />
      <DivButtonLike>
        <ButtonUnlike />
        <ButtonLike like={() => choosePerson()} />
      </DivButtonLike>
    </DivMain>
  );
}
