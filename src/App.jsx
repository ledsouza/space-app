import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";
import Banner from "./components/Banner";
import bannerBackground from "src/assets/banner.png";
import Galeria from "./components/Galeria";

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`;

const AppContainer = styled.div`
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
`;

const MainContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const GaleriaContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

function App() {
    return (
        <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
                <Cabecalho />
                <MainContainer>
                    <MenuLateral />
                    <GaleriaContainer>
                        <Banner
                            texto="A galeria mais completa de fotos do espaço!"
                            backgroundImage={bannerBackground}
                        />
                        <Galeria />
                    </GaleriaContainer>
                </MainContainer>
            </AppContainer>
        </FundoGradiente>
    );
}

export default App;
