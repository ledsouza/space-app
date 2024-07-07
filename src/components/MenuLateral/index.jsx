import styled from "styled-components";
import ItemLista from "./ItemLista";

const ListaItensStyle = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 213px;
`;

const MenuLateral = () => {
    return (
        <aside>
            <nav>
                <ListaItensStyle>
                    <ItemLista
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Ínicio
                    </ItemLista>
                    <ItemLista
                        iconeAtivo="/icones/mais-vistas-ativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemLista>
                    <ItemLista
                        iconeAtivo="/icones/mais-curtidas-ativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemLista>
                    <ItemLista
                        iconeAtivo="/icones/novas-ativoo.png"
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemLista>
                    <ItemLista
                        iconeAtivo="/icones/surpreenda-me-ativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemLista>
                </ListaItensStyle>
            </nav>
        </aside>
    );
};

export default MenuLateral;
