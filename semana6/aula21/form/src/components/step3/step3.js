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

export default class Step3 extends React.Component {
  render() {
    return (
      <DivContainer>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <label for='curso'>5. Por que você não terminou um curso de graduação?</label>
        <InputForm id='curso'/>
        <label for='ensino'>6. Você fez algum curso complementar?</label>
        <SelectOpt>
          <option value="Nenhum">Nenhum</option>
          <option value="Curso de inglês">Curso de inglês</option>
          <option value="Curso técnico">Curso técnico</option>
          </SelectOpt>
      </DivContainer>
    )
  }
}