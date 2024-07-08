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

const Galeria = ({ fotos = [] }) => {
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
                                    fotoURL={foto.path}
                                    fotoTitulo={foto.titulo}
                                    fotoFonte={foto.fonte}
                                />
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
