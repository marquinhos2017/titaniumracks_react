import styled from 'styled-components'

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //border: 1px solid black;
  grid-column-gap: 33px;
`

export const ContainerTela = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style-type: none;
  }
  max-width: 1024px;
  margin: auto;

  h3 {
    font-size: 32px;
    text-align: center;
  }

  h3 {
    margin-top: 56px;
    margin-bottom: 62px;
  }
`

export default ContainerProducts
