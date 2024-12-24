
import styled from 'styled-components'
import logo from '../../assets/img/Logo.png'
import Nav from '../Navegador/nav'

const HeaderEstilizado = styled.header`
   padding: 30px 60px;
   display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }

    @media (max-width: 768px) {
        img {
            display: none;
        }

        padding: 0;
    }
`

const Header = () => {
  return (
        <HeaderEstilizado>
            <img src={logo} alt="Logo AluraFlix" />
            <Nav/>
        </HeaderEstilizado>
  )
}

export default Header
