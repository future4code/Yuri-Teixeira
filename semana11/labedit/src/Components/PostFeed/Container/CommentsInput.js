import React from "react";
import { DivComment } from "./Styled";

export default function CommentsInput(props) {
  return (
    <DivComment>
      <input
        placeholder="Comentário"
        value={props.valueComment}
        onChange={props.onChangeComment}
      />
      <button onClick={props.onClickPostComment}>Post</button>
    </DivComment>
  );
}
