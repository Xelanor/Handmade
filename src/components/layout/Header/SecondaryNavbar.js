import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #042f4b;
  padding: 10px 0 5px 0;
  justify-content: space-around;
  border-bottom: 3px solid #ed1250;
`;

const HeaderLink = styled.span`
  color: #fff6da;
`;

const SecondaryNavbar = (props) => {
  return (
    <HeaderBlock>
      <HeaderLink>Çantalar</HeaderLink>
      <HeaderLink>Takılar</HeaderLink>
      <HeaderLink>Kıyafetler</HeaderLink>
      <HeaderLink>Süslemeler</HeaderLink>
      <HeaderLink>Sanatsal Ürünler</HeaderLink>
      <HeaderLink>Ev Ürünleri</HeaderLink>
      <HeaderLink>Oyuncaklar</HeaderLink>
    </HeaderBlock>
  );
};

export default SecondaryNavbar;
