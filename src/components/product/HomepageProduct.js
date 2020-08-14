import React from "react";
import styled from "styled-components";
import StarRate from "@material-ui/icons/StarRate";

const ProductContainer = styled.div`
  width: 50%;
  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ProductImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ProductDesc = styled.div`
  padding: 8px;
`;

const ProductTitle = styled.div`
  color: #042f4b;
  font-weight: 600;
`;
const ProductSeller = styled.div`
  color: #fbc99d;
  font-size: 12px;
`;
const ProductOriginalPrice = styled.div`
  color: ##4f4f4f;
  text-decoration: line-through;
  text-decoration-color: #ed1250;
  margin-right: 8px;
`;
const ProductDiscountPrice = styled.div`
  color: ##4f4f4f;
`;

const ProductRate = styled.div`
  color: #ed1250;
  margin-right: -5px;
`;

const HomepageProduct = () => {
  return (
    <ProductContainer>
      <Product>
        <ProductImage
          src="https://cdn.shopify.com/s/files/1/1680/3505/products/tobaccoweb2_dfec8d69-efcb-4957-b681-f8c673189fb9_grande.jpg?v=1583234172"
          alt=""
        />
        <ProductDesc>
          <ProductTitle>Özel Boyalı Cam şişe</ProductTitle>
          <ProductSeller>Satıcı: Esra Yıldız</ProductSeller>
          <div style={{ display: "flex" }}>
            <ProductOriginalPrice>139.99TL</ProductOriginalPrice>
            <ProductDiscountPrice>109.99TL</ProductDiscountPrice>
          </div>
          <div style={{ display: "flex" }}>
            <ProductRate>
              <StarRate />
            </ProductRate>
            <ProductRate>
              <StarRate />
            </ProductRate>
            <ProductRate>
              <StarRate />
            </ProductRate>
            <ProductRate>
              <StarRate />
            </ProductRate>
            <ProductRate>
              <StarRate />
            </ProductRate>
          </div>
        </ProductDesc>
      </Product>
    </ProductContainer>
  );
};

export default HomepageProduct;
