import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer,
} from "./styles";

import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

function Post(props) {
  const [curtido, setCurtido] = useState(false);
  let [comentando, setComentando] = useState(false);
  let [numeroCurtidas, setNumeroCurtidas] = useState(0);
  let [numeroComentarios, setNumeroComentarios] = useState(0);

  const onClickCurtida = () => {
    setCurtido((curtido = !curtido));
  };

  const onClickComentario = () => {
    setComentando((comentando = !comentando));
  };

  const enviarComentario = (comentario) => {
    setNumeroComentarios(numeroComentarios + 1);
    setComentando((comentando = false));
  };

  const comentarios = () => {
    if (comentando) {
      return <SecaoComentario enviarComentario={() => enviarComentario()} />;
    }
  };

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={curtido ? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {comentarios()}
    </PostContainer>
  );
}

export default Post;
