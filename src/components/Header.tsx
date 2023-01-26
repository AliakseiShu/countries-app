import React, { useEffect, useState } from 'react'

import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import styled from 'styled-components'

import { Container } from './Container'

export const HeaderEL = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`
export const Title = styled.a.attrs({ href: '/' })`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-width: var(--fw-bold);
`

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  //font-width: var(--fw-bold);
`

export const Header = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <HeaderEL>
      <Container>
        <Wrapper>
          <Title>Where is the world</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
            <span style={{ padding: '0 10px' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEL>
  )
}
