import React, { useEffect, useState } from "react";
import useForm from "../../Hooks/useForm";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { goToLogin } from "../../Routes/Coordinator";
import { DivContent, DivNewPost, DivPosts } from "./Styled";
import PostFeed from "../../Components/PostFeed/Container/PostFeed";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [form, onChange, clearFields] = useForm({
    title: "",
    text: "",
  });
  const history = useHistory();
  const getPosts = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts";

    const Authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(URL, Authorization)
      .then((res) => {
        setPosts(res.data.posts);
        console.log("posts", posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const votePost = (vote, id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`;
    const body = {
      direction: vote,
    };
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .put(URL, body, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderPosts = posts.map((post) => {
    return (
      <PostFeed
        key={post.id}
        id={post.id}
        onClickUp={() => votePost(1, post.id)}
        userVoteDirection={post.userVoteDirection}
        onClickDown={() => votePost(-1, post.id)}
        username={post.username}
        text={post.text}
        votesCount={post.votesCount}
        commentsCount={post.commentsCount}
      />
    );
  });

  const newPost = () => {
    const Authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts";

    axios
      .post(URL, form, Authorization)
      .then((res) => {
        console.log(res);
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      goToLogin(history);
    }
    getPosts();
  }, [history]);

  return (
    <DivContent>
      <DivNewPost>
        <input
          placeholder="Título"
          name="title"
          onChange={onChange}
          value={form.title}
        />
        <input
          placeholder="Novo post"
          name="text"
          name="text"
          onChange={onChange}
          value={form.text}
        />
        <button onClick={newPost}>Postar</button>
      </DivNewPost>
      <DivPosts>{renderPosts}</DivPosts>
    </DivContent>
  );
}
