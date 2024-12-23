import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header/header.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home.jsx";
import Footer from "./components/Footer/footer.jsx";
import Video from "./components/Pages/Video.jsx";
import { useContext } from "react";
import { DataContext } from "./context/DataContext.jsx";

const FondoGradiente = styled.div`
  background-color: #262626;
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  max-width: 100%;
  margin: 0 auto; 
`;

const MainContainer = styled.main`
  
  gap: 24px;

  @media (max-width: 768px) {
    margin-bottom: 8vh;
  }
`;

function App() {

const { categorias, videos } = useContext(DataContext);


  return (
    <Router>
      <FondoGradiente>
        <GlobalStyles /> 
        <AppContainer>
          <Header />
          <MainContainer>
            <Routes>
              <Route path="/" element={<Home categorias={categorias} videos={videos}  />} />

              <Route path="/video" element={<Video categorias={categorias} />} />

              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </MainContainer>
          <Footer />
        </AppContainer>
      </FondoGradiente>
    </Router>
  );
}

export default App;
