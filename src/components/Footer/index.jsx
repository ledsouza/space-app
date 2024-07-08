import styled from "styled-components";
import Facebook from "src/../public/imagens/sociais/facebook.svg?react";
import Instagram from "src/../public//imagens/sociais/instagram.svg?react";
import Twitter from "src/../public//imagens/sociais/twitter.svg?react";

const FooterStyle = styled.footer`
    background-color: #04244f;
    max-width: 100vw
    height: 80px;
    display: flex;
    padding: 0 16px;
    justify-content: space-between;
    align-items: center;
    p {
        font-family: GandhiSansRegular;
        font-size: 16px;
        color: #ffffff;
    }
`;

const MediaContainer = styled.ul`
    display: flex;
    gap: 36px;
    align-items: center;
    list-style: none;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <MediaContainer>
                <li>
                    <Facebook />
                </li>
                <li>
                    <Instagram />
                </li>
                <li>
                    <Twitter />
                </li>
            </MediaContainer>
            <p>Desenvolvido por Leandro Souza</p>
        </FooterStyle>
    );
};

export default Footer;
