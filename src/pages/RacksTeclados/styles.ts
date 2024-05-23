import styled from 'styled-components'
import background from '../../assets/images/background.png'

export const BackgroundImg = styled.div`
  width: 100%;

  max-height: 100%; /* Altura da viewport */

  background-image: url(${background});
  background-size: cover; /* Cobrir toda a div */
  background-position: center; /* Centralizar o background */
  display: flex;

  align-items: center; /* Centralizar verticalmente */
  position: relative;
  overflow: hidden;
`
export const Texto = styled.div`
  padding: 120px;
  max-width: 45%;
  p {
    font-size: 16px;
    color: white;
  }

  h3 {
    font-size: 32px;
    font-weight: bold;
    color: white;
  }

  animation: moveUp 1s ease-out;
`

export const Imagem = styled.div`
  padding: 20px;
  width: 60%;
  display: flex;
  justify-content: center; /* Para centralizar horizontalmente */
  align-items: center; /* Para centralizar verticalmente */

  img {
    max-height: 100%;
    width: 700px;
    height: auto;
    border: none;
    position: relative;
    overflow: hidden;
    animation: moveUp 1s ease-out;
  }

  @keyframes moveUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
