import Banner from '../../components/Banner';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import HeaderMain from '../../components/HeaderMain';
import SectionCards from '../../components/SectionCards';
import ModalEditar from '../../components/ModalEditar';
import { useState } from 'react';


const Inicial = () => {
  const [idEdit, setIdEdit] = useState(null);
  const [selecaoEdit, setSelecaoEdit] = useState('');
  const [estadoModal, setEstadoModal] = useState(false);
  const alternarModal = (id, selecao) => {
    setEstadoModal(!estadoModal); // Inverte o valor atual de estadoModal
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
