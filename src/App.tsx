import React from 'react'
import Logo from './components/Logo'
import * as S from './App.styles'

function App() {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo />
        <S.Heading aria-label="Boilerplate criado por Jadir Junior">
          Boilerplate criado por Jadir Junior!
        </S.Heading>
      </S.Content>
    </S.Wrapper>
  )
}

export default App
