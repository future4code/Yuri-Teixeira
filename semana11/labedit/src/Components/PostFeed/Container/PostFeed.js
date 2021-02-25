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
import CommentsInput from "./CommentsInput";

export default function PostFeed(props) {
  const [showPostComment, setShowPostComment] = useState(false);
  const [comment, setComment] = useState("");

  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  const onClickPostComment = () => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/comment`;
    const body = {
      text: comment,
    };
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .post(URL, body, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DivContent>
      <DivHeader>{props.username}</DivHeader>
      <InputComment>{props.text}</InputComment>
      <DivFooter>
        <DivButton>
          <ButtonUp
            onClick={props.onClickUp}
            counter={props.votesCount}
            userVoteDirection={props.userVoteDirection}
          />
          <ButtonDown
            onClick={props.onClickDown}
            userVoteDirection={props.userVoteDirection}
          />
        </DivButton>
        <Comments
          valueComments={props.commentsCount}
          onClick={() => setShowPostComment(!showPostComment)}
        />
      </DivFooter>
      {showPostComment && (
        <CommentsInput
          valueComment={comment}
          onChangeComment={onChangeComment}
          onClickPostComment={onClickPostComment}
        />
      )}
    </DivContent>
  );
}
