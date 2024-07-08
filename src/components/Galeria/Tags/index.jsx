import styled from "styled-components";
import tags from "./tags.json";

const TagContainer = styled.div`
    display: flex;
`;

const TagTitulo = styled.h3`
    font-family: GandhiSansRegular;
    font-weight: 400;
    font-size: 24px;
    color: #d9d9d9;
`;

const ListaTags = styled.ul`
    display: flex;
    list-style: none;
    gap: 24px;
`;

const TagBotao = styled.button`
    background: #d9d9d94d;
    font-family: GandhiSansRegular;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 10px 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        border-color: #c98cf1;
    }
`;

const Tags = ({ setTag }) => {
    return (
        <TagContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <ListaTags>
                {tags.map((tag) => (
                    <li key={tag.id}>
                        <TagBotao onClick={() => setTag(tag.id)}>{tag.titulo}</TagBotao>
                    </li>
                ))}
            </ListaTags>
        </TagContainer>
    );
};

export default Tags;
