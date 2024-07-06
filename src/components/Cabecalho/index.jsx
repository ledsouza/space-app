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

const Cabecalho = () => {
    return (
        <HeaderStyle>
            <img src="/imagens/logo.png" alt="" />
            <CampoBusca />
        </HeaderStyle>
    );
};

export default Cabecalho;
