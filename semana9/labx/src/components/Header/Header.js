import React from "react";
import styled from "styled-components";

const DivContent = styled.div`
  display: flex;
  height: 60px;
  background-color: #142850;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

const Plogo = styled.p`
  margin: 10px;
`;

const Menus = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
`;

const ItensMenu = styled.li`
padding: 5px;
margin: 5px;
`

export default function Header() {
  return (
    <DivContent>
      <Plogo>Home</Plogo>
      <Menus>
        <ItensMenu>Todas viagens</ItensMenu>
        <ItensMenu>Login</ItensMenu>
      </Menus>
    </DivContent>
  );
}
