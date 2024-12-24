import styled from "styled-components";
import heroImage from "../../assets/img/hero.png";
import videoImage from "../../assets/img/imagen-hero.png";

const BannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 50px;
  width: 50%;
`;

const FrontEndButton = styled.button`
  background-color: #6BD1FF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 4rem;
  cursor: pointer;
  margin-bottom: 20px;
  max-width: 850px;

`;

const Description = styled.div`
  max-width: 600px;

  h3 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const BannerImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; /* Ocupa la mitad del banner */
`;

const BannerImage = styled.img`
  width: 80%; /* Ajusta el tamaño dentro del contenedor */
  height: auto;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <InfoContainer>
        <FrontEndButton>Front End</FrontEndButton>
        <Description>
          <h3>Challenge React</h3>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </Description>
      </InfoContainer>
      <BannerImageContainer>
        <BannerImage src={videoImage} alt="Imagen de video" />
      </BannerImageContainer>
    </BannerContainer>
  );
};

export default Banner;
