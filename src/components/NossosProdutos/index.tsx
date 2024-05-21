import ItemNossosProdutos from '../ItemNossosProdutos'
import ItemNossosProdutosVariacao from '../ItemNossosProdutos/index_variacao'
import { ContainerNossosProdutos, Grid, TituloNossosProdutos } from './styles'

const NossosProdutos = () => {
  return (
    <>
      <ContainerNossosProdutos>
        <TituloNossosProdutos>Nossos Produtos</TituloNossosProdutos>
        <Grid>
          <ItemNossosProdutos />
          <ItemNossosProdutosVariacao />
          <ItemNossosProdutos />
          <ItemNossosProdutosVariacao />
        </Grid>
      </ContainerNossosProdutos>
    </>
  )
}

export default NossosProdutos
