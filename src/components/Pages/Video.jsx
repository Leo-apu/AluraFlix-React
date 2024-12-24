/* eslint-disable react/prop-types */
import styled from "styled-components";
import VideoForm from "../VideoForm/videoForm";
import Modal from "../Modal/modal";
import useModal from "../../util/useModal";
import CategoryForm from "../CategoriaForm/categoryForm";

import { useState } from "react";
import EditCategoryForm from "../CategoriaForm/editCategoryForm";
import DeleteCategoryForm from "../CategoriaForm/deleteCategoryForm";

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0e0e0e;
  color: white;
  padding: 20px;
`;

const VideoTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const VideoSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
  color: #b3b3b3;
`;

const BotonesTipo = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.$active ? "#000000" : "#03122F")};
  color: ${(props) => (props.$active ? "#2171D1" : "#ffffff")};
  border: 1px solid ${(props) => (props.$active ? "#2171D1" : "#ffffff")};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size:${(props) => (props.$active ? "0.95rem" : "1rem")}; 
  transition: all 0.3s ease;
  box-shadow: ${(props) => (props.$active ?  "inset 0 0 8px #2171D1" : "none")};
  transition: all 0.3s ease;
  text-transform: ${(props) => (props.$active ? "uppercase" : "none")};

  &:hover {
    background-color: ${(props) => (props.$active ? "#2a238d" : "#2171D1")};
    color: white;
  }
`;

const Video = ({ categorias , videos }) => {
  const { open, cambiarEstado } = useModal();
  const [tipo, setTipo] = useState("crear");

  return (
    <>
      <VideoContainer>
        <VideoTitle>Nuevo Video</VideoTitle>
        <VideoSubtitle>
          Complete el formulario para crear una nueva tarjeta de video
        </VideoSubtitle>
        <VideoForm categorias={categorias} cambiarEstado={cambiarEstado} />
      </VideoContainer>
      <Modal estado={open} cambiarEstado={() => cambiarEstado(null)}
        titulo={"Administrar Categorias"}
        mostrarEncabezado={true}
        padding={'20px'}
        >
        <BotonesTipo>
          <StyledButton
            onClick={() => setTipo("crear")}
            $active={tipo === "crear"}
          >
            Crear Categoria
          </StyledButton>
          <StyledButton
            onClick={() => setTipo("editar")}
            $active={tipo === "editar"}
          >
            Editar Categoria
          </StyledButton>
          <StyledButton
            onClick={() => setTipo("eliminar")}
            $active={tipo === "eliminar"}
          >
            Eliminar Categoria
          </StyledButton>
        </BotonesTipo>
        {tipo === "crear" && <CategoryForm />}
        {tipo === "editar" && <EditCategoryForm categorias={categorias} />}
        {tipo === "eliminar" && <DeleteCategoryForm categorias={categorias} videos={videos} />}
      </Modal>
    </>
  );
};

export default Video;
