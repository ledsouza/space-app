import styled from "styled-components";

const ImagemContainer = styled.div`
    max-width: 100%;
    margin: 12px;
`;

const ImagemStyle = styled.figure`
    max-width: 100%;
    height: ${(props) => (props.$expandida ? "740px" : "336px")};
    background-image: ${(props) => `url(${props.$fotoPath})`};
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    border-radius: 20px 20px 0 0;
`;

const ImagemCapture = styled.figcaption`
    background-color: #001634;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 0 0 20px 20px;
`;

const TextoContainer = styled.div`
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
`;

const ImagemTitulo = styled.h3`
    font-family: GandhiSansBold;
    margin: 0;
`;

const ImagemFonte = styled.p`
    font-family: GandhiSansRegular;
    margin: 0;
`;

const BotoesContainer = styled.div`
    display: flex;
    gap: 24px;
    img {
        cursor: pointer;
    }
`;

const Imagem = ({ foto, expandida = false, onZoom, onToggleFavorita }) => {
    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png";

    return (
        <ImagemContainer>
            <ImagemStyle $fotoPath={foto.path} $expandida={expandida}></ImagemStyle>
            <ImagemCapture>
                <TextoContainer>
                    <ImagemTitulo>{foto.titulo}</ImagemTitulo>
                    <ImagemFonte>{foto.fonte}</ImagemFonte>
                </TextoContainer>
                <BotoesContainer>
                    <img
                        src={iconeFavorito}
                        alt="Favoritar"
                        aria-hidden={expandida}
                        onClick={() => onToggleFavorita(foto)}
                    />
                    {!expandida && (
                        <img
                            src="/icones/expandir.png"
                            alt="Expandir"
                            aria-hidden={expandida}
                            onClick={() => onZoom(foto)}
                        />
                    )}
                </BotoesContainer>
            </ImagemCapture>
        </ImagemContainer>
    );
};

export default Imagem;
