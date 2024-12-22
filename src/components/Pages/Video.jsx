import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

const Video = () => {
  return (
    <VideoContainer>
      <VideoTitle>Nuevo Video</VideoTitle>
      <VideoSubtitle>
        Complete el formulario para crear una nueva tarjeta de video
      </VideoSubtitle>
      
    </VideoContainer>
  );
};

export default Video;
