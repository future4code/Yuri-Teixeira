import React, { Component } from 'react'
import styled from 'styled-components'
import './SecaoComentario.css'

const ComentarioDiv = styled.div`
  display: flex;
  background-color: aquamarine;
`

export class SecaoComentario extends Component {
	state = {
		comentarios: ['a', 'b'],
		novoComentario: ''
	}

	aoEnviar = () => {
		this.setState({ comentarios: [...this.state.comentarios, this.state.novoComentario], novoComentario: '' });
		console.log(this.state.comentarios);
	}

	onChangeComentario = (e) => {
		this.setState({ novoComentario: e.target.value })
	}

	

	render() {
		const comentarios = () => {
			this.state.comentarios.map(p => {
				return (
					<ComentarioDiv>{p}</ComentarioDiv>
				)
			})
		}

		return (
			<div className={'comment-container'}>
				<input
					className={'input-comentario'}
					placeholder={'Comentário'}
					value={this.state.novoComentario}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.aoEnviar}>Enviar</button>
				{comentarios}
			</div>
		)
	}
}
