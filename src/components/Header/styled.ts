import styled from 'styled-components'

export const HeaderUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  list-style-type: none;

  li {
    margin-right: 50px;
    list-style-type: none;
    font-size: 14px;
    color: #8f8f8f;
    margin: auto;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;

  img {
    max-width: 100px;
  }
`
