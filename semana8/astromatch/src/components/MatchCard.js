import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  apiUrl,
  choosePersonUrl,
  getMatchesUrl,
  clearMatchesUrl,
} from "../Connection/connection";

import ButtonMatches from "./MaterialUI/ButtonMatches";
import ImgMediaCard from "./MaterialUI/ImageCard";
import ButtonLike from "./MaterialUI/ButtonLike";
import ButtonUnlike from "./MaterialUI/ButtonUnlike";
import Avatar from "./Avatar";

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 1000px;
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

const ButtonCList = styled.button`
  width: 100%;
  height: 50px;
  background-color: #82003e;
  color: white;
  font-size: 1.5rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export default function MatchCard() {
  let [profile, setProfile] = useState([]);
  let [showMatches, setShowMatches] = useState(false);
  let [matches, setMatches] = useState([]);

  const page = () => {
    if (!showMatches ) {
      return (
        <div>
          <ImgMediaCard
            image={profile.photo}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
          />
          <DivButtonLike>
            <ButtonUnlike unlike={() => getProfile()} />
            <ButtonLike like={() => choosePerson()} />
          </DivButtonLike>
        </div>
      );
    } else {
      return (
        <div>
          <ButtonCList onClick={() => clearMatches()}>Limpar lista</ButtonCList>
          {matches.map((p) => {
            return (
              <div>
                <Avatar image={p.photo} name={p.name} />
                <hr color="black" />
              </div>
            );
          })}
        </div>
      );
    }
  };

  const getMatches = () => {
    const request = axios.get(getMatchesUrl);
    request.then((res) => {
      setMatches((matches = res.data.matches));
    });
  };

  const clearMatches = () => {
    const request = axios.put(clearMatchesUrl);
    request
      .then((res) => {
        console.log("Lista limpa com sucesso!");
        getMatches();
      })
      .catch((err) => {
        console.log("Algo de errado nao está certo.");
      });
  };

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
          getMatches();
        }
      })
      .catch((err) => {
        console.log(err);
      });

    getProfile();
  };

  useEffect(() => {
    getProfile();
    getMatches();
  }, []);

  return (
    <DivMain>
      <BarHeader>
        <p>Astromatch</p>
        <ButtonMatches
          matches={() => setShowMatches((showMatches = !showMatches))}
        />
      </BarHeader>
      {page()}
    </DivMain>
  );
}
