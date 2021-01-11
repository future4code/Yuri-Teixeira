import React, { Component } from 'react'
import styled from 'styled-components'
import './SecaoComentario.css'

const ComentarioDiv = styled.div`
  display: flex;
  background-color: aquamarine;
`

export class SecaoComentario extends Component {
	state = {
		novoComentario: ''
	}

	onChangeComentario = (e) => {
		this.setState({ novoComentario: e.target.value })
	}

	render() {
		return (
			<div className={'comment-container'}>
				<input
					className={'input-comentario'}
					placeholder={'Comentário'}
					value={this.state.novoComentario}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.props.aoEnviar}>Enviar</button>
				
			</div>
		)
	}
}
