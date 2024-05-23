import {
  ButtonSaibaMais,
  ContainerItem,
  IconKeyboard,
  ImageWrapper,
  Img
} from './styles'
import teclado from '../../assets/images/b.png'
import teclado2 from '../../assets/images/5b36516bd94b429f8157ca9f61001e72-removebg-preview 1.png'
import Icon from '../../assets/images/pngtree-piano-icon-vector-png-image_8402179-removebg-preview 1.png'

const ItemProductRackStudio = () => {
  return (
    <>
      <ContainerItem>
        <ImageWrapper>
          <Img src={teclado} alt="" srcSet="" />
        </ImageWrapper>

        <h5>TY-212/ 215</h5>

        <h5>R$ 250</h5>
      </ContainerItem>
    </>
  )
}
export default ItemProductRackStudio
