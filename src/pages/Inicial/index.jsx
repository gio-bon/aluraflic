import Banner from '../../components/Banner';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import HeaderMain from '../../components/HeaderMain';
import SectionCards from '../../components/SectionCards';
import ModalEditar from '../../components/ModalEditar';
import { useState } from 'react';


// Este componente Inicial é responsável por renderizar a tela inicial do site.
// Ele possui três seções de cards, cada uma com um título diferente e uma coleção de vídeos.
// Há um modal que pode ser aberto para editar um vídeo clicando no botão de editar.
const Inicial = () => {
  // idEdit é o id do vídeo que está sendo editado.
  // selecaoEdit é a seleção atual do vídeo que está sendo editado.
  // estadoModal é um estado que controla se o modal está aberto ou fechado.
  const [idEdit, setIdEdit] = useState(null);
  const [selecaoEdit, setSelecaoEdit] = useState('');
  const [estadoModal, setEstadoModal] = useState(false);
  // alternarModal é uma função que inverte o valor de estadoModal e define o id e a seleção do vídeo a ser editado.
  const alternarModal = (id, selecao) => {
    setEstadoModal(!estadoModal);
    setIdEdit(id);
    setSelecaoEdit(selecao);
  };

  return (
    <>
      <HeaderMain/>
      <Banner/>
      <ParentContainer>
        <SectionCards titulo="Front End" selecao="videos-front" alternarModal={alternarModal}/>
        <SectionCards titulo="Back End" selecao="videos-back" alternarModal={alternarModal}/>
        <SectionCards titulo="Mobile" selecao="videos-mobile" alternarModal={alternarModal}/>
      </ParentContainer>
      <ModalEditar estadoModal={estadoModal} alternarModal={alternarModal} idEdit={idEdit} selecaoEdit={selecaoEdit}/>
      <Footer />
    </>
  )
}

const ParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px; /* Espaçamento entre os componentes SectionCards */
    background-color: var(--gray);
    padding-top: 50px;
    padding-bottom: 50px;
`;

export default Inicial
