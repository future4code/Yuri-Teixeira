import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  goToHome,
  goToLogin,
  goToAllTrips,
  goToCreateTrip,
} from "../Routes/Coordinator";
import HomeIcon from "@material-ui/icons/Home";

const DivContent = styled.div`
  display: flex;
  height: 60px;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
  height: 100%;
  :hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;

const Menus = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
`;

const ItensMenu = styled.a`
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 1.4rem;

  :hover {
    background-color: white;
    color: black;
  }
`;

export default function Header() {
  const history = useHistory();

  const logInlogOut = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <DivContent>
      <IconContent>
        <HomeIcon style={{ fontSize: 40 }} onClick={() => goToHome(history)} />
      </IconContent>
      <Menus>
        <li>
          <ItensMenu href="" onClick={() => goToAllTrips(history)}>
            Todas viagens
          </ItensMenu>
        </li>
        
        <li>
          <ItensMenu href="" onClick={() => logInlogOut()}>
            {localStorage.getItem("token") ? "Logout" : "Login"}
          </ItensMenu>
        </li>
      </Menus>
    </DivContent>
  );
}
