import styled from 'styled-components';
import '../../index.css'
import { AiOutlineHome } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HeaderMain = () => {
  return (
    <StyledHeader>
          <img src="./logo.png" alt="logotipo" />
        <StyledH2>
          <Link to="/"><StyleButton><AiOutlineHome /> Home</StyleButton></Link>
          <Link to="/novo-video"><StyleButton><FaPlus /> Novo Video</StyleButton></Link>
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

const StyleButton = styled.button`
  cursor: pointer;
  &:hover {
      background-color: var(--white);
      color: var(--black);
      transition: 0.5s;
  }
  width: 200px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--back1);
  color: var(--white);
  border: none;
  color: var(--white);
  font-family: var(--font);
  font-size: 17px;
  font-weight: 500;
`;

export default HeaderMain
