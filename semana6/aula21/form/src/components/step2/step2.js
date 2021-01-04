import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const InputForm = styled.input`
  width: 250px;
  margin: 10px 0px;
`

export default class Step2 extends React.Component {
  render() {
    return (
      <DivContainer>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <label for='curso'>5. Qual curso?</label>
        <InputForm id='curso' placeholder='Curso' />
        <label for='ensino'>6. Qual a unidade de ensino?</label>
        <InputForm id='ensino' placeholder='Ensino' />
      </DivContainer>
    )
  }
}