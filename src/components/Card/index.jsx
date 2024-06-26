import styled from 'styled-components'
import { GrEdit } from 'react-icons/gr';
import {RiDeleteBin2Fill} from 'react-icons/ri'

const Card = ({cod_video, link, removeVideo, id, selecao, alternarModal}) => {
  const link_back = `https://img.youtube.com/vi/${cod_video}/sddefault.jpg`;

  return (
    <>
    <StyledCard>
        <a href={link} target="_blank" rel="noopener noreferrer"><img src={link_back} alt="img card" /></a>
        <SyledButtons>
            <button onClick={() => removeVideo(id, selecao)} ><RiDeleteBin2Fill/> Deletar</button> 
            <button onClick={() => { alternarModal(id, selecao) }}><GrEdit/> Editar</button>
        </SyledButtons>
    </StyledCard>
    </>
  )
}

const SyledButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin-bottom: 28px;
    font-size: 18px;
    font-weight: 600;
    gap: 80px;
    button{
        cursor: pointer;
        &:hover {
            background-color: var(--white);
            color: var(--black);
            transition: 0.5s;
        }
        width: 100px;
        height: 40px;
        border-radius: 8px;
        background-color: var(--black);
        color: var(--white);
        border: none;
        color: var(--white);
        font-family: var(--font);
        font-size: 17px;
        font-weight: 500;
    }
`

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    align-content: space-around;
    justify-content: space-between;
    width: 432px;
    height: 320px;
    background-color: var(--black);
    border-radius: 20px;
    border: 10px solid var(--red);
    text-align: center;
    a{
        object-fit: cover;
        width: 100%;
        height: 70%;
    }
    img{
        object-fit: cover;
        height: 100%;
        border-radius: 10px;
        width: 100%;
    }
    }
`

export default Card