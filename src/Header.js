import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: white;
  height: 5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.6rem;
`;



const Header = () => {
  return <HeaderContainer>
    <Title>Lnese Manajer</Title>
  </HeaderContainer>
}


export default Header;
