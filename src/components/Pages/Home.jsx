/* eslint-disable react/prop-types */
import Banner from "../Banner/Banner";
import Categoria from "../Categoria/categoria";
import Modal from "../Modal/modal";
import { useState } from "react";
import useModal from "../../util/useModal";

const Home = ({ categorias, videos }) => {
  const { open, cambiarEstado , typeModal } = useModal();
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
        categorias.map((categoria) => (
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

      <Modal estado={open} cambiarEstado={() => cambiarEstado(null)}>
        {typeModal === "editar" && <h3>Editar</h3>}
        {typeModal === "verVideo" && selectedVideo ? (
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${getYouTubeID(selectedVideo.link)}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : typeModal === "verVideo" ? (
          <h3>Selecciona un video</h3>
        ) : null}
      </Modal>
    </>
  );
};

export default Home;
