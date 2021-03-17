import React from "react";
import { ButtonStyled, Counter } from "./Styled";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export default function ButtonDown(props) {
  const color = () => {
    if (props.userVoteDirection === -1) {
      return "#C70039";
    } else {
      return "#000";
    }
  };
  
  return (
    <div>
      <ButtonStyled onClick={props.onClick} style={{ color: color() }}>
        <KeyboardArrowDownIcon />
      </ButtonStyled>
    </div>
  );
}
