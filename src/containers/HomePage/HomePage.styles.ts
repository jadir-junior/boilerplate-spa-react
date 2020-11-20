import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background-color: black;
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const Heading = styled.h2``
