import React from "react";
import { ButtonStyled, Counter } from "./Styled";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function ButtonDown() {
  return (
    <div>
      <ButtonStyled>
        <KeyboardArrowDownIcon />
      </ButtonStyled>
    </div>
  );
}
