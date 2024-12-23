/* eslint-disable react/prop-types */
import Banner from "../Banner/Banner";
import Categoria from "../Categoria/categoria";
import Modal from "../Modal/modal";
import { useState } from "react";

const Home = ({ categorias, videos }) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalImg, setModalImg] = useState(false);
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
            estado={modalEdit}
            cambiarEstado={setModalEdit}
            estadoImg={modalImg}
            cambiarEstadoImg={setModalImg}
            setSelectedVideo={setSelectedVideo}
          />
        ))}

      <Modal estado={modalEdit} cambiarEstado={setModalEdit}>
        <h3>editar</h3>
      </Modal>
      <Modal estado={modalImg} cambiarEstado={setModalImg}>
        {selectedVideo ? (
          <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${getYouTubeID(selectedVideo.link)}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        ) : (
          <h3>Selecciona un video</h3>
        )}
      </Modal>
    </>
  );
};

export default Home;
