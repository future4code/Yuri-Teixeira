import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { goToLogin } from "../../Routes/Coordinator";

import { DivContent, DivContPost } from "./Styled";

export default function DetailsPost() {
  const { id } = useParams();
  const [dataPost, setDataPost] = useState({});
  const history = useHistory();

  const getDetails = () => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`;
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(URL, headers)
      .then((res) => {
        setDataPost(res.data.post);
        console.log(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      goToLogin(history);
    }
    getDetails();
  }, []);

  return (
    <DivContent>
      <DivContPost>
        {dataPost.commentsCount}
        <br />
        {dataPost.createdAt}
        <br />
        {dataPost.id}
        <br />
        {dataPost.text}
        <br />
        {dataPost.title}
        <br />
        {dataPost.userVoteDirection}
        <br />
        {dataPost.username}
        <br />
        {dataPost.votesCount}
        <br />
      </DivContPost>
    </DivContent>
  );
}
