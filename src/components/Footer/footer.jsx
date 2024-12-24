import styled from 'styled-components'
import logo from '../../assets/img/Logo.png'

const FooterEstilizado = styled.footer` 
    background-color: black;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: 2px solid #2171D1;
    img{
        width: 150px;
    }

    span{
        padding-top : 5px;
        color: #2171D1;
        font-weight: lighter;
    }
    
    @media (max-width: 768px) {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8vh;
        img {
            display: none;
        }
        span {
            display: none;
        }
    }
`

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Footer = () => {
    return (
        <Contenedor>
            <div> 
            </div>
            <FooterEstilizado>
                <img src={logo} alt="Logo AluraFlix" /> 
                <span>© 2024 Leandro Victorino Cruz. Todos los derechos reservados</span>
            </FooterEstilizado>
        </Contenedor>
    )
}

export default Footer
