import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagem from "./Imagem";
import Botao from "../Botao";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoGaleria = styled.section`
    flex-grow: 1;
`;

const ListaFotos = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    li {
        width: 50%;
    }
`;

const ListaFotosPopulares = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    img {
        width: 212px;
        height: 158px;
        border-radius: 20px;
    }
`;

const Galeria = ({ fotos = [], onFotoSelecionada, onToggleFavorita }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoGaleria>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaFotos>
                        {fotos.map((foto) => (
                            <li key={foto.id}>
                                <Imagem
                                    foto={foto}
                                    onZoom={onFotoSelecionada}
                                    onToggleFavorita={onToggleFavorita}
                                />
                            </li>
                        ))}
                    </ListaFotos>
                </SecaoGaleria>
                <ListaFotosPopulares>
                    <Titulo $alinhamento="center">Populares</Titulo>
                    {fotos.map((foto) => (
                        <img key={foto.id} src={foto.path} />
                    ))}
                    <Botao>Ver mais</Botao>
                </ListaFotosPopulares>
            </GaleriaContainer>
        </>
    );
};

export default Galeria;
