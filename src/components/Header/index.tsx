import { HeaderContainer, HeaderUl } from './styled'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <img src={logo} alt="" srcSet="" />
    </Link>
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
