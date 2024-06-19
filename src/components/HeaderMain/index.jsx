import styled from 'styled-components';
import '../../index.css'

const HeaderMain = () => {
  return (
    <StyledHeader>
          <img src="./logo.png" alt="logotipo" />
        <StyledH2>
          <h2>Home</h2>
          <h2>Novo Video</h2>
        </StyledH2>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  font-family: var(--font);
  background-color: var(--back2);
  top: 0;
  left: 0;
  height: 125px;
  margin-top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledH2 = styled.div`
  font-size: 14px;
  display: flex;
  gap: 20px;
  color: white;
`;

export default HeaderMain
