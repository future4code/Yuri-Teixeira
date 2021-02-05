import "./App.css";
import styled from "styled-components";
import MatchCard from "./components/MatchCard";

const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <DivContent>
      <MatchCard />
    </DivContent>
  );
}

export default App;
