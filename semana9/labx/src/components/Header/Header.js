import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToHome, goToLogin, goToAllTrips, goToCreateTrip } from "../Routes/Coordinator";

const DivContent = styled.div`
  display: flex;
  height: 60px;
  background-color: #142850;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

const Menus = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
`;

const ItensMenu = styled.a`
  padding: 5px;
  margin: 5px;
  text-decoration: none;
  color: white;
`;

export default function Header() {
  const history = useHistory();

  const logInlogOut = () => {
    if(localStorage.getItem("token")){
      localStorage.removeItem("token");
      goToLogin(history);
    } else {
      goToLogin(history)
    }
  }

  return (
    <DivContent>
      <ItensMenu href="" onClick={() => goToHome(history)}>
        Home
      </ItensMenu>
      <Menus>
      <li>
          <ItensMenu href="" onClick={() => goToCreateTrip(history)}>Criar viagem</ItensMenu>
        </li>
        <li>
          <ItensMenu href="" onClick={() => goToAllTrips(history)}>Todas viagens</ItensMenu>
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
