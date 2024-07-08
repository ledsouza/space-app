import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dialog = styled.dialog`
    position: sticky;
    background: transparent;
    border: none;
    width: 80vw;
    height: auto;
`;

const BotaoFechar = styled.button`
    position: absolute;
    top: 36px;
    right: 36px;
    background: transparent;
    border: none;
    cursor: pointer;
`;

const ModalZoom = ({ foto, onFechar }) => {
    return (
        <>
            {foto && (
                <Overlay>
                    <Dialog open={!!foto}>
                        <Imagem foto={foto} expandida={true} />
                        <form method="dialog">
                            <BotaoFechar formMethod="dialog" onClick={onFechar}>
                                <img src="/icones/fechar.png" alt="Ícone de fechar" />
                            </BotaoFechar>
                        </form>
                    </Dialog>
                </Overlay>
            )}
        </>
    );
};

export default ModalZoom;
