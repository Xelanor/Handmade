import React from "react";
import styled from "styled-components";

import HomepageProduct from "../../product/HomepageProduct";
import HomepageFirstLine from "./HomepageFirstLine";

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const SecondLine = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductLine = styled.div`
  display: flex;
  padding-top: 10px;
  flex-wrap: wrap;
`;

const HeaderText = styled.div`
  font-family: "Pacifico", cursive;
  text-decoration: underline;
  margin-right: 10px;
  margin-left: 10px;
`;

const Homepage = () => {
  return (
    <HomepageContainer>
      <HomepageFirstLine />
      <SecondLine>
        <HeaderText>İndirimli Ürünler</HeaderText>
        <ProductLine>
          <HomepageProduct />
          <HomepageProduct />
          <HomepageProduct />
          <HomepageProduct />
          <HomepageProduct />
          <HomepageProduct />
          <HomepageProduct />
          <HomepageProduct />
          <HomepageProduct />
        </ProductLine>
      </SecondLine>
    </HomepageContainer>
  );
};

export default Homepage;
