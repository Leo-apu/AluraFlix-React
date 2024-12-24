/* eslint-disable react/prop-types */
import Banner from "../Banner/Banner";
import Categoria from "../Categoria/categoria";
import Modal from "../Modal/modal";
import { useState } from "react";
import useModal from "../../util/useModal";
import EditVideoForm from "../VideoForm/editVideoForm";
import styled from "styled-components";

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Home = ({ categorias, videos }) => {
  const { open, cambiarEstado, typeModal } = useModal();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getYouTubeID = (url) => {
    const regExp = /[?&]v=([^&#]*)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  };

  return (
    <>
      <Banner />
      {categorias &&
        categorias
          .filter((categoria) =>
            videos.some((video) => video.categoria === categoria.titulo)
          )
          .map((categoria) => (
            <Categoria
              key={categoria.id}
              titulo={categoria.titulo}
              colorPrimario={categoria.colorPrimario}
              videos={videos.filter(
                (video) => video.categoria === categoria.titulo
              )}
              cambiarEstado={cambiarEstado}
              setSelectedVideo={setSelectedVideo}
            />
          ))}

      {typeModal === "editar" && (
        <Modal
          estado={open}
          cambiarEstado={() => cambiarEstado(null)}
          titulo={"Editar Video"}
          mostrarEncabezado={true}
          padding={"20px"}
        >
          <EditVideoForm
            categorias={categorias}
            selectedVideo={selectedVideo}
          />
        </Modal>
      )}

      {typeModal === "verVideo" && selectedVideo ? (
        <Modal
          estado={open}
          cambiarEstado={() => cambiarEstado(null)}
          titulo={selectedVideo.titulo}
          mostrarEncabezado={false}
          padding={"0px"}
        >
          <IframeContainer>
            <StyledIframe
              src={`https://www.youtube.com/embed/${getYouTubeID(
                selectedVideo.link
              )}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></StyledIframe>
          </IframeContainer>
        </Modal>
      ) : typeModal === "verVideo" ? (
        <h3>Selecciona un video</h3>
      ) : null}

    </>
  );
};

export default Home;
