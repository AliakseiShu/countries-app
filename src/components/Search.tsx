import React, { ChangeEvent, FC } from 'react'

import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
`

type SearchType = {
  search: string
  setSearch: (value: string) => void
}

export const Search: FC<SearchType> = ({ search, setSearch }) => {
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.currentTarget.value)

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={inputHandler} value={search} />
    </InputContainer>
  )
}
