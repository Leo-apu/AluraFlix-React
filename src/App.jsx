import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header/header.jsx";

const FondoGradiente = styled.div`
  /* background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  ); */
  background-color: #262626;
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

function App() {
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Header/>
          <MainContainer>
            <section>
              <h1>AluraFlix</h1>
            </section>
          </MainContainer>
        </AppContainer>
      </FondoGradiente>
    </>
  );
}

export default App;
