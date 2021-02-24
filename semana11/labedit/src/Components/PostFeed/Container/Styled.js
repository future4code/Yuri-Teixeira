import styled from "styled-components";

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 500px;
  min-height: 500px;
  position: relative;
  margin: 10px;
`;

export const DivHeader = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  height: 35px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DivFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  width: 500px;
  height: 35px;
  bottom: 0px;
  position: absolute;
`;
