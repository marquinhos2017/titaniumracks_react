import { HeaderContainer, HeaderUl } from './styled'
import logo from '../../assets/images/logo.png'

export const Header = () => (
  <HeaderContainer>
    <img src={logo} alt="" srcSet="" />
    <HeaderUl>
      <li>HOME</li>
      <li>CONHECA A TITANIUM</li>
      <li>PRODUTOS</li>
      <li>ONDE ENCONTRAR</li>
      <li>CONTATO</li>
    </HeaderUl>
  </HeaderContainer>
)

export default Header
