import React from "react";
import { ButtonStyled, Counter } from "./Styled";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function ButtonDown(props) {
  return (
    <div>
      <ButtonStyled onClick={props.onClick}>
        <KeyboardArrowDownIcon />
      </ButtonStyled>
    </div>
  );
}
