import React, { useState } from "react";
import { DivContent, DivHeader, DivFooter } from "./Styled";
import ButtonUp from "../ButtonUp/ButtonUp";
import ButtonDown from "../ButtonDown/ButtonDown";

export default function PostFeed() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <DivContent>
      <DivHeader>Nome do usuário</DivHeader>
      <DivFooter>
        <ButtonUp onClick={addCounter} counter={counter} />
        <ButtonDown />
      </DivFooter>
    </DivContent>
  );
}
