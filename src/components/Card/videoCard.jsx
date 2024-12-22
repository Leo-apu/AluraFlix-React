/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";

// Estilos para el contenedor principal
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: black;
  border: 1px solid ${({ $colorPrimario }) => $colorPrimario};
  border-radius: 10px;
  width: 430px;
  position: relative;
  box-shadow: 1px 0px 5px 1px ${({ $colorPrimario }) => $colorPrimario};
  overflow: hidden;
`;

// Contenedor para la imagen o video principal
const MediaContainer = styled.div`
  background: #001a33;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 15px 5px ${({ $colorPrimario }) => $colorPrimario};
`;

// Estilo para la imagen o video
const Media = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Contenedor para los botones
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  /* width: 100%; */
  /* height: 30%; */
  box-shadow: 0 0 15px 5px ${({ $colorPrimario }) => $colorPrimario};
`;

// Botón estilizado
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  gap: 8px;

  &:hover {
    background: ${({ $colorPrimario }) => $colorPrimario};
    color: #000;
  }
`;

// Componente funcional
const VideoCard = ( { colorPrimario} ) => {
  return (
    <CardContainer $colorPrimario={colorPrimario}>
      <MediaContainer $colorPrimario={colorPrimario}>
        <Media src="https://via.placeholder.com/300x200" alt="Preview" />
      </MediaContainer>
      <ButtonContainer $colorPrimario={colorPrimario}>
        <Button $colorPrimario={colorPrimario}>
          <FaTrash /> Borrar
        </Button>
        <Button $colorPrimario={colorPrimario}>
          <FaEdit /> Editar
        </Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default VideoCard;
