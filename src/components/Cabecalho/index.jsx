import { styled } from "styled-components";
import CampoBusca from "../CampoBusca";

const HeaderStyle = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 211px;
    }
`;

const Cabecalho = ({ setFiltro }) => {
    return (
        <HeaderStyle>
            <img src="/imagens/logo.png" alt="" />
            <CampoBusca setFiltro={setFiltro} />
        </HeaderStyle>
    );
};

export default Cabecalho;
