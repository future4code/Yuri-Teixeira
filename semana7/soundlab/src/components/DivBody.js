import React from 'react'
import styled from 'styled-components'

const _Body = styled.div`
display: flex;
background-color: white;
height: 100vh;
`

export default class DivBody extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <_Body>
          {this.props.content}
        </_Body>
      </div>
    )
  }
}