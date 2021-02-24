import React from "react";
import { ButtonStyled, Counter } from "./Styled";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

export default function ButtonUp(props) {
  return (
    <div>
      <ButtonStyled onClick={props.onClick}>
        <KeyboardArrowUpIcon />
        <Counter>{props.counter}</Counter>
      </ButtonStyled>
    </div>
  );
}
