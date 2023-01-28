import React, { FC } from 'react'

import styled from 'styled-components'

import { Container } from './Container'

const Wrapper = styled.main`
  padding: 2rem 0;
  @media (max-width: 767px) {
    padding: 4rem 0;
  }
`

type MainType = {
  children: any
}

export const Main: FC<MainType> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}
