import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`
export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;
  text-align: center;

  button {
    background: ${({theme}) => theme.colors.red};
    width: 100%;
    max-width: 16.5rem;
    min-height: 4rem;

    border: none;
    border-radius: 8px;

    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.white};

    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, '#AA2424')};
    }
  }
`

export const Title = styled.h1``

export const SubTitle = styled.h4`
  margin: 1rem 0;
`

export const Table = styled.table`
  margin: 0 auto;
`

