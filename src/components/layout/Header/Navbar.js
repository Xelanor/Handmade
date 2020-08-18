import React, { useState } from "react";
import { useStateValue } from "../../../state/StateProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AttachMoney from "@material-ui/icons/AttachMoney";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import Logo from "../../../assets/logo.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
`;

const LogoBlock = styled.img`
  width: 150px;
  margin: 5px 10px 5px 10px;
  object-fit: contain;
  @media (min-width: 768px) {
    width: 200px;
    margin-right: 60px;
    margin-left: 60px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 0;
`;

const HeaderSearchBox = styled.div`
  display: flex;
  flex: 1;
`;

const HeaderSearchInput = styled.input`
  height: 28px;
  padding: 10px;
  font-size: 14px;
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (max-width: 768px) {
    height: 18px;
    padding: 8px;
    font-size: 10px;
  }

  :focus {
    outline: none;
  }
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  height: 28px !important;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.action};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 18px !important;
  }
`;

const HeaderNavContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderMobileNavContainer = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderNavBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

const MobileHeaderNavBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const HeaderIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary};
  margin-right: 5px;
`;

const HeaderNavText = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 16px;
  font-weight: 400;
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: #9fa6b2 !important;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
  display: ${(props) =>
    props.display ? "none !important" : "flex !important"};
  :hover {
    color: white !important;
    background-color: #374151 !important;
  }
  :focus {
    color: white !important;
    background-color: #374151 !important;
    outline: 0;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: #9fa6b2 !important;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
  display: ${(props) =>
    props.display ? "flex !important" : "none !important"};
  :hover {
    color: white !important;
    background-color: #374151 !important;
  }
  :focus {
    color: white !important;
    background-color: #374151 !important;
    outline: 0;
  }
`;

const MobileNavbarContainer = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  background-color: ${(props) => props.theme.colors.primary};
  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar = (props) => {
  const [{ basket }] = useStateValue();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HeaderBlock>
          <StyledLink to="/">
            <LogoBlock src={Logo} alt="" />
          </StyledLink>
          <HeaderSearchBox>
            <HeaderSearchInput type="text" placeholder="Ürün Ara" />
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
          </HeaderSearchBox>
          <HeaderNavContainer>
            <HeaderNavBlock>
              <HeaderIconContainer>
                <AttachMoney style={{ fontSize: 32 }} />
              </HeaderIconContainer>
              <HeaderNavText>Satış Yap</HeaderNavText>
            </HeaderNavBlock>
            <StyledLink to="/login">
              <HeaderNavBlock>
                <HeaderIconContainer>
                  <AccountCircle style={{ fontSize: 32 }} />
                </HeaderIconContainer>
                <HeaderNavText>Giriş Yap</HeaderNavText>
              </HeaderNavBlock>
            </StyledLink>
            <StyledLink to="/sepetim">
              <HeaderNavBlock>
                <HeaderIconContainer>
                  <ShoppingBasketIcon style={{ fontSize: 30 }} />
                </HeaderIconContainer>
                <HeaderNavText>{basket.length}</HeaderNavText>
              </HeaderNavBlock>
            </StyledLink>
          </HeaderNavContainer>
          <HeaderMobileNavContainer>
            <>
              <StyledMenuIcon
                onClick={() => setMobileMenu(true)}
                display={mobileMenu}
              />
              <StyledCloseIcon
                onClick={() => setMobileMenu(false)}
                display={mobileMenu}
              />
            </>
          </HeaderMobileNavContainer>
        </HeaderBlock>
      </HeaderContainer>
      <MobileNavbarContainer display={mobileMenu}>
        <StyledLink to="/login">
          <MobileHeaderNavBlock>
            <HeaderIconContainer>
              <AccountCircle style={{ fontSize: 32 }} />
            </HeaderIconContainer>
            <HeaderNavText>Giriş Yap</HeaderNavText>
          </MobileHeaderNavBlock>
        </StyledLink>
        <StyledLink to="/sell">
          <MobileHeaderNavBlock>
            <HeaderIconContainer>
              <AttachMoney style={{ fontSize: 32 }} />
            </HeaderIconContainer>
            <HeaderNavText>Satış Yap</HeaderNavText>
          </MobileHeaderNavBlock>
        </StyledLink>
      </MobileNavbarContainer>
    </>
  );
};

export default Navbar;
