/* eslint-disable react/prop-types */
import styled from "styled-components";

const BotonEstilizado = styled.button`
  width: 11rem;
  height: 4rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  padding: 0.8rem 2.5rem;
  border: 2px solid #fff;
  background-color: #262626;
  text-align: center;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  /* Estilos para cuando el botón está en hover o activo */
  ${({ activo }) => activo && `
    background-color: #000;
    color: #2171D1; 
    border-color: #2171D1; 
    box-shadow: inset 0 0 10px #2171D1; 
  `}

  &:hover {
    background-color: #000;
    color: #2171D1; 
    border-color: #2171D1; 
    box-shadow: inset 0 0 10px #2171D1; 
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 10rem;
    height: 4rem;
  }
`;

const Boton = ({ titulo, activo }) => {
  return <BotonEstilizado activo={activo}>{titulo}</BotonEstilizado>;
};

export default Boton;
