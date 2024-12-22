/* eslint-disable react/prop-types */
import styled from "styled-components";
import VideoCard from "../Card/videoCard";

const CategoriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 0 50px 50px 50px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CategoriaTitle = styled.h2`
  background-color: #6bd1ff;
  color: white;
  padding: 10px 80px;
  border-radius: 10px;
  font-size: 2rem;
  margin-bottom: 20px;
  max-width: 850px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 10px 40px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Categoria = ( { titulo , colorPrimario, videos} ) => {
  return (
    <CategoriaContainer>
      <CategoriaTitle style={{ backgroundColor: colorPrimario }}>{titulo}</CategoriaTitle>
      <CardsContainer>
       {videos.map((video, index) => (
          <VideoCard key={index} video={video} colorPrimario={colorPrimario} />
        ))}
      </CardsContainer>
    </CategoriaContainer>
  );
};

export default Categoria;
