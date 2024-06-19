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
    img{
      border: 10px solid var(--red);
      border-radius: 22px;
    }
`;

const StyledInsideBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    gap: 25px;
    h3{
        margin: 0;
        color: var(--white);
        font-size: 44px;
        font-family: var(--font);
        width: 70%;
    }
    p{
        line-height: 1.3; /* define o espaçamento entre as linhas */
        margin: 0;
        color: var(--white);
        font-size: 24px;
        font-family: var(--font);
    }
      
`;

const StyledBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 832px;
    background-color: var(--back1);
`;

const ImagemBanner = styled.img`
    border-left: 10px solid var(--red);
    border-right: 10px solid var(--red);
    position: absolute;
    filter: blur(1px) brightness(30%); /* Adiciona o efeito de escurecimento à imagem */
    background-color: var(--back2); /* Define a cor de fundo da imagem, com um pouco de transparência */
    width: 1442px;
    height: 832px;
    object-fit: cover;
`;

export default Banner
