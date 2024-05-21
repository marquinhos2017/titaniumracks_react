import {
  ContainerImageItemProduct,
  ContainerItemProduto,
  ImageProduct,
  Square,
  Title
} from './styles'
import teclado from '../../assets/images/5b36516bd94b429f8157ca9f61001e72-removebg-preview 1.png'

const ItemNossosProdutos = () => {
  return (
    <>
      <ContainerItemProduto>
        <Title>
          Rack <p>Studio</p>
        </Title>
        <ContainerImageItemProduct>
          <Square></Square>
          <ImageProduct src={teclado} alt="" srcSet="" />
        </ContainerImageItemProduct>
      </ContainerItemProduto>
    </>
  )
}

export default ItemNossosProdutos
