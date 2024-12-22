/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import showAlert from "../../util/Alert";

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
  overflow  : hidden;

  &:hover {
    box-shadow: 0 0 15px 5px ${({ $colorPrimario }) => $colorPrimario};
    transform: scale(0.95);
  }
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
const VideoCard = ( { colorPrimario , video} ) => {
  const { eliminarVideo } = useContext(DataContext);

  const handleDeleteVideo = () => {
    eliminarVideo(video.id);
    showAlert("Video Eliminado", `El video "${video.titulo}" ha sido eliminado con exito`, "success" , "Aceptar");
  };


  return (
    <CardContainer $colorPrimario={colorPrimario}>
      <MediaContainer $colorPrimario={colorPrimario}>
        <Media src={video.imagen} alt="Preview" />
      </MediaContainer>
      <ButtonContainer $colorPrimario={colorPrimario}>
        <Button $colorPrimario={colorPrimario} onClick={handleDeleteVideo}>
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
