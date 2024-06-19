import styled from "styled-components"
import Card from "../Card"
import React, { useState, useEffect } from 'react';

const SectionCards = ({ titulo, selecao }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`./src/data/${selecao}.json`)
            .then(response => response.json())
            .then(data => setVideos(data.videos))
            .catch(error => console.error('Erro ao buscar vídeos:', error));
    }, []);

    return (
        <>
            <StyledContainer>
                <StyledH2>{titulo}</StyledH2>
            <StyledSectionCards>
            {videos.map(video => (
                <Card
                    key={video.id}
                    link={`https://www.youtube.com/embed/${video.cod_video}`}
                    cod_video={video.cod_video}
                />
            ))}
            </StyledSectionCards>
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gray});
    height: 500px;
`

const StyledH2 = styled.h2`
    color: var(--dark);
    font-size: 42px;
    font-family: var(--font);
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 50px;
`

const StyledSectionCards = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    height: 100%;
`

export default SectionCards