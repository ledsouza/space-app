import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

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

const Galeria = ({ fotos = [], onFotoSelecionada }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoGaleria>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaFotos>
                        {fotos.map((foto) => (
                            <li key={foto.id}>
                                <Imagem foto={foto} onZoom={onFotoSelecionada} />
                            </li>
                        ))}
                    </ListaFotos>
                </SecaoGaleria>
                <Populares />
            </GaleriaContainer>
        </>
    );
};

export default Galeria;
