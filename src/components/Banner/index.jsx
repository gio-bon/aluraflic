import styled from 'styled-components'

const Banner = () => {
    const cod_thumb = "4BxrxiMMjcA";
    const link_back = `https://img.youtube.com/vi/${cod_thumb}/sddefault.jpg`;
    const link = `https://www.youtube.com/embed/${cod_thumb}`;

    return (
        <StyledBanner>
            <ImagemBanner src={link_back} alt="Banner"></ImagemBanner>
            <ContainerInsideBanner>
                <StyledInsideBanner>
                    <h3>React: O minimo de base que você precisa saber para não sofrer começando com a ferramenta</h3>
                    <p>Muita gente fala que precisamos ter a base da linguagem para poder aprender um framework como React, mas o que é a base? Como visualizar isso? Nesse vídeo eu faço um exercicio de separar conceitos com vocês em cima da própria API do React! Extraindo o que de JavaScript é importante ser aprendido.</p>
                </StyledInsideBanner>
                <a href={link} target="_blank" rel="noopener noreferrer"><img src={link_back} alt="Banner" /></a>
            </ContainerInsideBanner>
        </StyledBanner>
    )
}

const ContainerInsideBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 832px;
    z-index: 1;
    gap: 25px;
    a{
        margin: 20px;
    }
    img {
        width: 500px;
        border: 10px solid var(--red);
        border-radius: 22px;
    }
    /* Responsividade */
    @media (max-width: 1300px) {
        img {
            width: 400px;
        }
    }
    @media (max-width: 1130px) {
        flex-direction: column;
        width: 90%;
        height: auto;
        gap: 15px;

    }
    @media (max-width: 768px) {
        width: 100%;
        gap: 10px;
        img {
            width: 100%;
            border: 5px solid var(--red);
        }
    }
`;

const StyledInsideBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    @media (max-width: 1300px) {
        align-items: center;
        p {
            font-size: 12px;
        }
    }
    h3 {
        margin: 0;
        color: var(--white);
        font-size: 40px;
        font-family: var(--font);
        width: 100%;
    }
    p {
        line-height: 1.3;
        margin: 0;
        color: var(--white);
        font-size: 24px;
        font-family: var(--font);
        width: 90%;
    }
    @media (max-width: 1024px) {
        h3 {
            font-size: 36px;
        }
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 768px) {
        h3 {
            font-size: 28px;
        }
        p {
            font-size: 16px;
            width: 100%;
        }
    }
`;

const StyledBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 852px;
    background-color: var(--back1);
    @media (max-width: 1024px) {
        height: auto;
        padding: 20px 0;
    }
`;

const ImagemBanner = styled.img`
    border-left: 10px solid var(--red);
    border-right: 10px solid var(--red);
    position: absolute;
    filter: blur(8px) brightness(10%);
    background-color: var(--back2);
    width: 100%;
    height: 832px;
    object-fit: cover;
    @media (max-width: 1024px) {
        height: 600px;
    }
    @media (max-width: 768px) {
        height: 400px;
    }
`;

export default Banner
