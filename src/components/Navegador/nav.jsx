/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import Boton from "../Boton/boton";
import { Link, useResolvedPath } from "react-router-dom";

const ContainerEstilizado = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 1rem 0;
    bottom: 0;
    left: 2rem;
    position: fixed;
    justify-content: center;
    z-index: 1;
  }
`;

const Nav = () => {
    const url = useResolvedPath().pathname;

  return (
    <ContainerEstilizado>
      <Link to="/">
        <Boton titulo="Home" activo={url === '/'} />
      </Link>

      {/* Botón Nuevo Video visible solo en las rutas / y /video */}
      <Link to="/video">
        <Boton titulo="Nuevo Video" activo={url === "/video"} />
      </Link>

{/*       {url === '/'
                ?
                <Link to={"/video"}>
                    <Boton titulo="Nuevo Video" />
                </Link>
                :
                null
            } */}
    </ContainerEstilizado>
  );
};

export default Nav;
