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

const SelectOpt = styled.select`
  width: 250px;
  margin: 10px 0px;
`

export default class Step1 extends React.Component {
  render() {
    return (
      <DivContainer>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <label for='nome'>1. Qual o seu nome?</label>
        <InputForm id='nome' placeholder='Nome' />
        <label for='idade'>2. Qual a sua idade?</label>
        <InputForm id='idade' placeholder='Idade' />
        <label for='email'>3. Qual o seu email?</label>
        <InputForm id='email' placeholder='Email' />
        <label for='escolaridade'>4. Qual a sua escolaridade?</label>
        <SelectOpt> 
          <option value="Ensino médio incompleto">Ensino médio incompleto</option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superior incompleto">Ensino superior incompleto</option>
          <option value="Ensino médio completo">Ensino médio completo</option>
        </SelectOpt>

        
      </DivContainer>
    )
  }
}