import Banner from '../Banner'
import ItemProduct from '../ItemProduct/ItemProduct'
import ItemProduct2 from '../ItemProduct/ItemProduct2'
import ContainerProducts, { ContainerTela } from './styles'

const Products = () => (
  <>
    <ContainerTela>
      <h3>Produtos em destaque</h3>
      <ContainerProducts>
        <ItemProduct />
        <ItemProduct2 />
        <ItemProduct />
      </ContainerProducts>
    </ContainerTela>
  </>
)
export default Products
