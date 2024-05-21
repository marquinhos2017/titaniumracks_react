import { ContainerRacksparaEstudio, ContainerYT245 } from './styles'
import Yt245 from '../../assets/images/Mask group.png'
import NossosProdutos from '../NossosProdutos'

const RacksparaEstudio = () => {
  return (
    <>
      <ContainerRacksparaEstudio>
        <div>
          <img src={Yt245} alt="" srcSet="" />
        </div>
        <ContainerYT245>
          <div>
            <h4>Racks para Estudio</h4>
            <h3>YT 245</h3>
            <p>
              Sound better than ever with the world`s most popular audio
              interfaces.
            </p>

            <button>Mais sobre</button>
          </div>
        </ContainerYT245>
      </ContainerRacksparaEstudio>
      <NossosProdutos />
    </>
  )
}

export default RacksparaEstudio
