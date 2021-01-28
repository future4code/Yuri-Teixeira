import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { getProfileUnread as getNewprofile } from "../Connection/connection";

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

  useEffect(() => {
    const request = axios.get(getNewprofile);

    request
      .then((res) => {
        setProfile((profile = res.data.profile));
        console.log(profile);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <ButtonLike />
      </DivButtonLike>
    </DivMain>
  );
}
