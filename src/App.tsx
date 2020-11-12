import React from 'react'
import styled from 'styled-components'
import Logo from './components/Logo'

const Wrapper = styled.div`
  color: white;
  background-color: black;
  height: 100%;
`

const Header = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <h2 aria-label="Boilerplate criado por Jadir Junior">
          Boilerplate criado por Jadir Junior!
        </h2>
      </Header>
    </Wrapper>
  )
}

export default App
