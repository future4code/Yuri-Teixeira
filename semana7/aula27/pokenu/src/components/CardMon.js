import React from 'react'
import styled from 'styled-components'

const DivFoto = styled.div`
display: flex
`

export default class extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <DivFoto>
        <img src="" alt=""/>
        </DivFoto>
      </div>
    )
  }
}