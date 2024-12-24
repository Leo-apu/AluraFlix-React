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
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.active ? "#333" : "#1a1a1a")};
  color: ${(props) => (props.active ? "white" : "#b3b3b3")};
  border: 1px solid ${(props) => (props.active ? "#555" : "#333")};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#444" : "#2a2a2a")};
    color: white;
  }
`;

const Video = ({ categorias }) => {
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
      <Modal estado={open} cambiarEstado={() => cambiarEstado(null)}>
        <BotonesTipo>
          <StyledButton
            onClick={() => setTipo("crear")}
            active={tipo === "crear"}
          >
            Crear Categoria
          </StyledButton>
          <StyledButton
            onClick={() => setTipo("editar")}
            active={tipo === "editar"}
          >
            Editar Categoria
          </StyledButton>
          <StyledButton
            onClick={() => setTipo("eliminar")}
            active={tipo === "eliminar"}
          >
            Eliminar Categoria
          </StyledButton>
        </BotonesTipo>
        {tipo === "crear" && <CategoryForm />}
        {tipo === "editar" && <EditCategoryForm categorias={categorias} />}
        {tipo === "eliminar" && <DeleteCategoryForm categorias={categorias} />}
      </Modal>
    </>
  );
};

export default Video;
