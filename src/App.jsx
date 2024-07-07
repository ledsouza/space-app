import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";
import Banner from "./components/Banner";
import bannerBackground from "src/assets/banner.png";

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    gap: 24px;
`;

function App() {
    return (
        <FundoGradiente>
            <EstilosGlobais />
            <Cabecalho />
            <Container>
                <MenuLateral />
                <Banner
                    texto="A galeria mais completa de fotos do espaço!"
                    backgroundImage={bannerBackground}
                />
            </Container>
        </FundoGradiente>
    );
}

export default App;
