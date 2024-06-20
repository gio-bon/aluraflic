import Footer from '../../components/Footer';
import Formulario from '../../components/Formulario';
import HeaderMain from '../../components/HeaderMain';
import styled from 'styled-components';

const NovoVideo = () => {
  return (
    <>
    <HeaderMain/>
      <StyledContainer>
          <StylTitle>
            <h1>Novo Video</h1>
            <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
          </StylTitle>
          <Formulario title="Criar Card" action="CRIAR" methodHTTP="POST"/>
      </StyledContainer>
    <Footer/>
    </>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--back1);
  height: 87vh;
`

const StylTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: var(--font);
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0;
  h1{
    font-size: 42px;
    margin-bottom: 0;
  }
`

export default NovoVideo