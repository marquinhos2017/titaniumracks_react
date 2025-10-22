import styled from 'styled-components'

interface HeaderUlProps {
  isMenuOpen: boolean
}

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    margin: 0;
    justify-content: end;
  }

  img {
    max-width: 100px;
  }
`

export const HeaderUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  list-style: none;

  @media only screen and (max-width: 767px) {
    display: none;
  }

  li {
    margin-right: 50px;
    font-size: 14px;
    color: #8f8f8f;
    font-weight: 500;
    margin: auto;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 12px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`

export const HeaderUlB = styled.ul<HeaderUlProps>`
  display: none;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  list-style: none;

  @media only screen and (max-width: 767px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  }

  li {
    margin-right: 50px;
    font-size: 14px;
    color: #8f8f8f;
    font-weight: 500;
    margin: auto;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 12px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`

export const SandwichMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    padding: 10px;
  }
`
