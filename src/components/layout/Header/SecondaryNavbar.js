import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 3px solid ${(props) => props.theme.colors.action};
`;

const HeaderBlock = styled.div`
  display: flex;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  width: 100%;
  padding: 10px 0 5px 0;
  justify-content: space-between;
  -ms-overflow-style: none;

  @media (max-width: 768px) {
    overflow-x: scroll;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderLink = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  flex: 0 0 auto;
  padding-right: 10px;
  padding-left: 10px;
`;

const SecondaryNavbar = (props) => {
  return (
    <HeaderContainer>
      <HeaderBlock>
        <HeaderLink>Çantalar</HeaderLink>
        <HeaderLink>Takılar</HeaderLink>
        <HeaderLink>Kıyafetler</HeaderLink>
        <HeaderLink>Süslemeler</HeaderLink>
        <HeaderLink>Sanatsal Ürünler</HeaderLink>
        <HeaderLink>Ev Ürünleri</HeaderLink>
        <HeaderLink>Oyuncaklar</HeaderLink>
      </HeaderBlock>
    </HeaderContainer>
  );
};

export default SecondaryNavbar;
