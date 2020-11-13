import React from 'react'
import Logo from './components/Logo'
import * as S from './App.styles'

function App() {
  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
        <h2 aria-label="Boilerplate criado por Jadir Junior">
          Boilerplate criado por Jadir Junior!
        </h2>
      </S.Header>
    </S.Wrapper>
  )
}

export default App
