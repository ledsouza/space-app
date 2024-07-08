import styled from "styled-components";

const CampoBuscaStyle = styled.input`
    padding: 16px;
    border: 2px solid #c98cf1;
    border-radius: 10px;
    color: #d9d9d9;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    width: 30%;
    background-image: url("/icones/search.png");
    background-repeat: no-repeat;
    background-position: right 3% center;
    background-color: transparent;
`;

const CampoBusca = ({ onBuscar }) => {
    return (
        <CampoBuscaStyle
            type="text"
            placeholder="O que você procura?"
            onChange={(e) => onBuscar(e.target.value)}
        />
    );
};

export default CampoBusca;
