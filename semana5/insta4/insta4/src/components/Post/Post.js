import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import IconSave from '../iconSave/iconSave'
import IconShare from '../../img/share.svg'
import SectionShare from '../../components/sectionShare/sectionShare'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: true,
    numeroComentarios: 0,
    sharing: false,
  }

  onClickCurtida = () => {

    if (this.state.curtido) {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
      console.log('Descurtiu!')
    } else {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
      console.log('Curtiu!')
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickShare = () => {
    this.setState({
      sharing: !this.state.sharing
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      // comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let share;
    if (this.state.sharing) {
      share = <SectionShare />
    }

    return (
      <div className='post-container'>
        <div className={'post-header'}>
          <div className='photoName'>
            <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
            <p>{this.props.nomeUsuario}</p>
          </div>
          <IconSave />
        </div>

        <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

        <div className={'post-footer'}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <img src={IconShare} alt="" onClick={this.onClickShare} />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </div>
        {share}
        {componenteComentario}
      </div>
    )
  }
}

export default Post