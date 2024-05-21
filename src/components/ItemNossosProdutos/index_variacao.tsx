import {
  ContainerImageItemProduct,
  ContainerItemProduto,
  ImageProduct,
  Square,
  Title
} from './styles'
import teclado from '../../assets/images/b1060ed580b74742ac599a9eb6054bad-removebg-preview 1.png'

const ItemNossosProdutosVariacao = () => {
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

export default ItemNossosProdutosVariacao
