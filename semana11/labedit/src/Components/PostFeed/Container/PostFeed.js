import React, { useState } from "react";
import axios from "axios";
import {
  DivContent,
  DivHeader,
  DivFooter,
  DivButton,
  DivComment,
  InputComment,
} from "./Styled";
import ButtonUp from "../ButtonUp/ButtonUp";
import ButtonDown from "../ButtonDown/ButtonDown";
import Comments from "../Comments/Comments";

export default function PostFeed(props) {
  const [postComment, setPostComment] = useState(false);

  const DivComment = () => {
    return (
      <DivComment>
        <input placeholder="Comentário" />
        <button>Post</button>
      </DivComment>
    );
  };

  return (
    <DivContent>
      <DivHeader>{props.username}</DivHeader>
      <InputComment>{props.text}</InputComment>
      <DivFooter>
        <DivButton>
          <ButtonUp onClick={props.onClickUp} counter={props.votesCount} />
          <ButtonDown onClick={props.onClickDown} />
        </DivButton>
        <Comments
          valueComments={props.commentsCount}
          onClick={() => setPostComment(!postComment)}
        />
        {postComment && DivComment()}
      </DivFooter>
    </DivContent>
  );
}
