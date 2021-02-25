import React from "react";
import { DivContainer, ButtonComment } from "./Styled";
import CommentIcon from "@material-ui/icons/Comment";

export default function Comments(props) {
  return (
    <DivContainer>
      <p>
        {props.valueComments} <span>Comentários</span>
      </p>
      <ButtonComment onClick={props.onClick}>
        <CommentIcon />
      </ButtonComment>
    </DivContainer>
  );
}
