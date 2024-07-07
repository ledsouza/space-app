import styled from "styled-components";

const ItemListaStyle = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;
    a {
        text-decoration: none;
        color: ${(props) => (props.$ativo ? "#7B78E5" : "#D9D9D9")};
        font-family: ${(props) => (props.$ativo ? "GandhiSansBold" : "GandhiSansRegular")};
    }
`;

const ItemLista = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemListaStyle $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt={`Ícone de ${children}`} />
            <a href="#">{children}</a>
        </ItemListaStyle>
    );
};

export default ItemLista;
