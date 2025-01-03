/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import showAlert from "../../util/Alert";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: black;
  border: 1px solid ${({ $colorPrimario }) => $colorPrimario};
  border-radius: 10px;
  max-width: 410px;
  position: relative;
  box-shadow: 1px 0px 5px 1px ${({ $colorPrimario }) => $colorPrimario};
  overflow  : hidden;

  &:hover {
    box-shadow: 0 0 15px 5px ${({ $colorPrimario }) => $colorPrimario};
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    max-width: 92%;
  }
`;

const MediaContainer = styled.div`
  background: #001a33;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 15px 5px ${({ $colorPrimario }) => $colorPrimario};
`;

const Media = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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

const VideoCard = ( { colorPrimario , video , cambiarEstado , setSelectedVideo }  ) => {
  const { eliminarVideo } = useContext(DataContext);


  const handleDeleteVideo = () => {
    showAlert(
      "Confirmar Eliminación",
      `¿Estás seguro de que deseas eliminar el video "${video.titulo}"? Esta acción no se puede deshacer.`,
      "warning",
      "Sí, eliminar",
      "Cancelar"
    ).then((result) => {
      if (result.isConfirmed) {
        eliminarVideo(video.id);
        showAlert(
          "Video Eliminado",
          `El video "${video.titulo}" ha sido eliminado con éxito.`,
          "success",
          "Aceptar"
        );
      }
    });
  };


  return (
    <CardContainer $colorPrimario={colorPrimario} >
      <MediaContainer $colorPrimario={colorPrimario} onClick={() => {
        setSelectedVideo(video);
         cambiarEstado("verVideo");
      }}>
        <Media src={video.imagen} alt="Preview"  />
      </MediaContainer>
      <ButtonContainer $colorPrimario={colorPrimario}>
        <Button $colorPrimario={colorPrimario} onClick={handleDeleteVideo}>
          <FaTrash /> Borrar
        </Button>
        <Button $colorPrimario={colorPrimario} onClick={() => {
          setSelectedVideo(video);
          cambiarEstado("editar")}} >
          <FaEdit /> Editar
        </Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default VideoCard;
