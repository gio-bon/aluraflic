import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter>
        <img src="./logo.png" alt="logotipo" />
    </StyledFooter>
  )
}

/* 125 */
const StyledFooter = styled.footer`
    background-color: var(--back2);
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Footer