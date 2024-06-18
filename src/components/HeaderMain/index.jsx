import styled from 'styled-components';
import '../../index.css'

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

const StyledLogo = styled.div`
  font-size: 24px;
  color: white;
`;

const StyledH2 = styled.div`
  display: flex;
  gap: 20px;
  color: white;
`;

const HeaderMain = () => {
  return (
    <StyledHeader>
        <StyledLogo>
          <img src="./logo.png" alt="logotipo" />
        </StyledLogo>
        <StyledH2>
          <h2>Home</h2>
          <h2>Novo Video</h2>
        </StyledH2>
    </StyledHeader>
  )
}

export default HeaderMain
