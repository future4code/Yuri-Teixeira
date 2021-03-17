//Home
import styled from "styled-components";

export const DivContent = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  flex-direction: center;
`;

export const DivNewPost = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  padding: 10px;
  width: 600px;
  height: 150px;

  > input {
    height: 100px;
    width: 550px;
  }

  > button {
    width: 550px;
  }
`;

export const DivPosts = styled.div`
  display: flex;
  flex-direction: column;
`;
