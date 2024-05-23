import styled from 'styled-components'

export const Item = styled.div`
  color: white;
  display: flex;
  padding: 52px;
`
export const ContainerImg = styled.div`
  width: 100%;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;
  display: flex;

  img {
    max-width: 100%;
  }
`
export const Information = styled.div`
  align-items: center;
  width: 100%;
  //margin-left: 52px;
  display: flex;
  color: black;

  h3 {
    font-size: 32px;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 16px;
    color: #7a7a7a;
    margin: 0;
    padding: 0;
  }

  h5 {
    font-size: 24px;
    margin: 0;
    margin-top: 52px;
    margin-bottom: 48px;
  }

  hr {
    max-width: 920px;
    border-bottom: 1px solid #000000;
  }
`
export const ButtonSaibaMais = styled.button`
  font-weight: bold;
  color: white;
  background-color: #434142;
  width: 100%;
  border-radius: 10px;
  padding: 16px 72px;
  margin-top: 11px;
  font-size: 20px;

  border: none;
`

export const About = styled.div``

export const Descricao = styled.div`
  padding: 72px 96px;
  background-color: black;
  color: white;

  h3 {
    font-size: 32px;
  }

  h5 {
    font-style: normal;
  }

  h6 {
    font-weight: normal;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    font-size: 16px;
  }
`

export const Galeria = styled.div`
  background-color: white;
  display: flex;
  text-align: center;
  justify-content: center;

  h3 {
    font-size: 32px;
  }
`

export const GaleriaImagems = styled.div`
  width: 100%;
  max-width: 100%; /* Garante que o contêiner não exceda o tamanho da tela */
  display: flex;
  justify-content: center;
`

export const ItemImg = styled.img`
  max-width: calc(
    25% - 48px
  ); /* Garante que a imagem não exceda o tamanho da tela */
  height: auto; /* Mantém a proporção da imagem */
  padding: 24px;
`
