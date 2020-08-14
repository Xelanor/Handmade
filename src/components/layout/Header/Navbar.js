import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AttachMoney from "@material-ui/icons/AttachMoney";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import Logo from "../../../assets/logo.png";

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #042f4b;
`;

const LogoBlock = styled.img`
  width: 150px;
  margin: 10px 20px 10px 20px;
  object-fit: contain;
  @media (min-width: 768px) {
    width: 200px;
    margin-right: 60px;
    margin-left: 60px;
  }
`;

const HeaderSearchBox = styled.div`
  display: flex;
  flex: 1;
`;

const HeaderSearchInput = styled.input`
  height: 18px;
  padding: 10px;
  border: none;
  width: 100%;
  background-color: #fff6da;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  height: 28px !important;
  background-color: #fff6da;
  color: #ed1250;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const HeaderNavBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

const HeaderIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff6da;
  margin-right: 5px;
`;

const HeaderNavText = styled.span`
  color: #fff6da;
  font-size: 16px;
  font-weight: 400;
`;

const Navbar = (props) => {
  return (
    <HeaderBlock>
      <Link to="/">
        <LogoBlock src={Logo} alt="" />
      </Link>
      <HeaderSearchBox>
        <HeaderSearchInput type="text" placeholder="Ürün Ara" />
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </HeaderSearchBox>
      <HeaderNavBlock>
        <HeaderIconContainer>
          <AttachMoney style={{ fontSize: 32 }} />
        </HeaderIconContainer>
        <HeaderNavText>Satış Yap</HeaderNavText>
      </HeaderNavBlock>
      <HeaderNavBlock>
        <HeaderIconContainer>
          <AccountCircle style={{ fontSize: 32 }} />
        </HeaderIconContainer>
        <HeaderNavText>Giriş Yap</HeaderNavText>
      </HeaderNavBlock>
      <HeaderNavBlock>
        <HeaderIconContainer>
          <ShoppingBasketIcon style={{ fontSize: 30 }} />
        </HeaderIconContainer>
        <HeaderNavText>0</HeaderNavText>
      </HeaderNavBlock>
    </HeaderBlock>
  );
};

export default Navbar;
