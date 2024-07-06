import styled from "styled-components";
import ItemLista from "./ItemLista";

const ListaItensStyle = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const MenuLateral = () => {
    return (
        <aside>
            <nav>
                <ListaItensStyle>
                    <ItemLista
                        iconeAtivo="public/icones/home-ativo.png"
                        iconeInativo="public/icones/home-inativo.png"
                        ativo={true}
                    >
                        Ínicio
                    </ItemLista>
                    <ItemLista
                        iconeAtivo="public/icones/mais-vistas-ativo.png"
                        iconeInativo="public/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemLista>
                </ListaItensStyle>
            </nav>
        </aside>
    );
};

export default MenuLateral;
