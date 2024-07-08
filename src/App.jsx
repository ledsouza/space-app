import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";
import Banner from "./components/Banner";
import bannerBackground from "src/assets/banner.png";
import Galeria from "./components/Galeria";
import { useState } from "react";
import fotos from "src/../fotos.json";
import ModalZoom from "./components/ModalZoom";

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

const App = () => {
    const [fotosGaleria, setFotosGaleria] = useState(fotos);
    const [fotoSelecionada, setFotoSelecionada] = useState(null);

    const onBuscar = (valorBusca) => {
        setFotosGaleria(
            fotos.filter((foto) => foto.titulo.toUpperCase().includes(valorBusca.toUpperCase()))
        );
    };

    const onToggleFavorita = (foto) => {
        if (foto.id === fotoSelecionada?.id) {
            setFotoSelecionada({
                ...fotoSelecionada,
                favorita: !fotoSelecionada.favorita,
            });
        }
        setFotosGaleria(
            fotosGaleria.map((fotoGaleria) => {
                return {
                    ...fotoGaleria,
                    favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita,
                };
            })
        );
    };

    return (
        <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
                <Cabecalho onBuscar={onBuscar} />
                <MainContainer>
                    <MenuLateral />
                    <GaleriaContainer>
                        <Banner
                            texto="A galeria mais completa de fotos do espaço!"
                            backgroundImage={bannerBackground}
                        />
                        <Galeria
                            fotos={fotosGaleria}
                            onFotoSelecionada={(foto) => setFotoSelecionada(foto)}
                            onToggleFavorita={onToggleFavorita}
                        />
                    </GaleriaContainer>
                </MainContainer>
            </AppContainer>
            <ModalZoom
                foto={fotoSelecionada}
                onFechar={() => setFotoSelecionada(null)}
                onToggleFavorita={onToggleFavorita}
            />
        </FundoGradiente>
    );
};

export default App;
