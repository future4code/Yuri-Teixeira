import React from "react";
import { ButtonStyled, Counter } from "./Styled";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

export default function ButtonUp(props) {
  const color = () => {
    if(props.userVoteDirection === 1){
      return "#28B463"
    } else {
      return "#000"
    }
  }

  return (
    <div>
      <ButtonStyled onClick={props.onClick}>
        <KeyboardArrowUpIcon style={{ color: color() }}/>
        <Counter>{props.counter}</Counter>
      </ButtonStyled>
    </div>
  );
}
