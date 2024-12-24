
import styled from "styled-components";
import Boton from "../Boton/boton";
import { Link, useResolvedPath } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";


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

const DesktopButtons = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileButtons = styled.div`
  display: none;
  gap: 63px;  
  align-items: center;
  position: fixed;
  bottom: 15px;  
  left: 50%;  
  transform: translateX(-50%);  
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
  }
`;


const HomeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 24px;
  border: 2px solid #007bff;
  border-radius: 50px;
  background-color: transparent;
  color: #007bff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  svg {
    margin-right: 8px;
  }
`;

const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Nav = () => {
  const url = useResolvedPath().pathname;

  return (
    <ContainerEstilizado>
      <DesktopButtons>
        <Link to="/">
          <Boton titulo="Home" $activo={url === "/"} />
        </Link>
        <Link to="/video">
          <Boton titulo="Nuevo Video" $activo={url === "/video"} />
        </Link>
      </DesktopButtons>

      <MobileButtons>
        <Link to="/">
          <HomeButton>
            <FaHome />
            HOME
          </HomeButton>
        </Link>
        <Link to="/video">
          <PlusButton>
            <FaPlus />
          </PlusButton>
        </Link>
      </MobileButtons>
    </ContainerEstilizado>
  );
};

export default Nav;
