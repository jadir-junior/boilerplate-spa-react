import Logo from 'components/Logo'
import React from 'react'
import * as S from './HomePage.styles'

const HomePage = () => (
  <S.Wrapper>
    <S.Content>
      <Logo />
      <S.Heading aria-label="Boilerplate criado por Jadir Junior">
        Boilerplate criado por Jadir Junior!
      </S.Heading>
    </S.Content>
  </S.Wrapper>
)

export default HomePage
