import styled from 'styled-components'
import logo from '../../assets/img/Logo.png'

const FooterEstilizado = styled.footer` 
    background-color: black;
    padding: 20px;
    display: flex;
    justify-content: center;
    border-top: 2px solid #2171D1;
    img{
        width: 150px;
    }
    
    /* Fijar el footer en la parte inferior solo en pantallas pequeñas */
    @media (max-width: 768px) {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5vh;
        img {
            display: none;
        }
    }
`

const Contenedor = styled.div`
  min-height: 100vh; /* Asegura que el contenedor ocupe toda la altura */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Asegura que el contenido principal ocupe el espacio entre el header y el footer */
`

const Footer = () => {
    return (
        <Contenedor>
            <div> {/* Aquí iría tu contenido principal */} </div>
            <FooterEstilizado>
                <img src={logo} alt="Logo AluraFlix" /> 
            </FooterEstilizado>
        </Contenedor>
    )
}

export default Footer
