import styled from "styled-components";

const ImagemContainer = styled.div`
    max-width: 100%;
    margin: 12px;
`;

const ImagemStyle = styled.figure`
    max-width: 100%;
    height: 336px;
    background-image: ${(props) => `url(${props.$fotoURL})`};
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

const Imagem = ({ fotoURL, fotoTitulo, fotoFonte, expandida = false }) => {
    return (
        <ImagemContainer>
            <ImagemStyle $fotoURL={fotoURL}></ImagemStyle>
            <ImagemCapture>
                <TextoContainer>
                    <ImagemTitulo>{fotoTitulo}</ImagemTitulo>
                    <ImagemFonte>{fotoFonte}</ImagemFonte>
                </TextoContainer>
                <BotoesContainer>
                    <img src="/icones/favorito.png" alt="Favoritar" aria-hidden={expandida} />
                    {!expandida && (
                        <img src="/icones/expandir.png" alt="Expandir" aria-hidden={expandida} />
                    )}
                </BotoesContainer>
            </ImagemCapture>
        </ImagemContainer>
    );
};

export default Imagem;
