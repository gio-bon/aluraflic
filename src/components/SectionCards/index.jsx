import styled from "styled-components";
import Card from "../Card";
import React, { useState, useEffect } from 'react';

const SectionCards = ({ titulo, selecao, alternarModal}) => {
    const [videos, setVideos] = useState([]);
    const porta = 3002;
    
    const fetchVideos = async () => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/gio-bon/fake_json_server_aluraflix/${selecao}`);
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error('Erro ao buscar vídeos:', error);
        }
    };
    
    useEffect(() => {
        fetchVideos();
    }, [selecao]);

    return (
        <StyledContainer>
            <StyledH2>{titulo}</StyledH2>
            <StyledSectionCards>
                {videos.map(video => (
                    <Card
                        key={video.id}
                        link={`https://www.youtube.com/embed/${video.cod_video}`}
                        cod_video={video.cod_video}
                        id={video.id}
                        selecao={selecao}
                        removeVideo={async (id, selecao) => {
                            await fetch(`https://my-json-server.typicode.com/gio-bon/fake_json_server_aluraflix/${porta}/${selecao}/${id}`, {
                                method: 'DELETE',
                            });
                            fetchVideos();
                        }}
                        alternarModal={alternarModal}
                    />
                ))}
            </StyledSectionCards>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gray);
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 20px; /* Adicionando padding para evitar invasão */
`;

const StyledH2 = styled.h2`
    color: var(--dark);
    font-size: 42px;
    font-family: var(--font);
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 20px;
`;

const StyledSectionCards = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 30px;
    width: 100%;
`;

export default SectionCards;

