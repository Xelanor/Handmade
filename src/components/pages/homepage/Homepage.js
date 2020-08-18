import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Loader from "react-loader-spinner";

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

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

const Homepage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <HomepageContainer>
      <HomepageFirstLine />
      <SecondLine>
        <HeaderText>İndirimli Ürünler</HeaderText>
        <ProductLine>
          {products ? (
            products.map((product) => {
              return <HomepageProduct key={product._id} product={product} />;
            })
          ) : (
            <LoaderContainer>
              <Loader
                type="ThreeDots"
                color="#042f4b"
                height="100"
                width="100"
              />
            </LoaderContainer>
          )}
        </ProductLine>
      </SecondLine>
    </HomepageContainer>
  );
};

export default Homepage;
