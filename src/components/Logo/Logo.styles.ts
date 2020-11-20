import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ color }) => css`
    color: ${color};
    width: 30rem;
    height: fit-content;
  `}
`
