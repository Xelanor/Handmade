import React from "react";
import { Link } from "react-router-dom";
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ProductSeller = styled.div`
  color: #fbc99d;
  font-size: 12px;
`;
const ProductOriginalPrice = styled.div`
  color: #4f4f4f;
  text-decoration: line-through;
  text-decoration-color: #ed1250;
  margin-right: 16px;
`;
const ProductDiscountPrice = styled.div`
  color: #4f4f4f;
`;

const ProductRate = styled.div`
  color: #ed1250;
  margin-left: -5px;
`;

const HomepageProduct = ({ product }) => {
  return (
    <ProductContainer>
      <Link to={`/urun/${product.slug}`}>
        <Product>
          <ProductImage src={product.images[0]} alt="" />
          <ProductDesc>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductSeller>Satıcı: Esra Yıldız</ProductSeller>
            <div style={{ display: "flex" }}>
              <ProductOriginalPrice>
                {product.originalPrice}TL
              </ProductOriginalPrice>
              <ProductDiscountPrice>
                {product.discountPrice}TL
              </ProductDiscountPrice>
            </div>
            <div style={{ display: "flex" }}>
              {Array(product.rating)
                .fill()
                .map((_) => (
                  <ProductRate>
                    <StarRate />
                  </ProductRate>
                ))}
            </div>
          </ProductDesc>
        </Product>
      </Link>
    </ProductContainer>
  );
};

export default HomepageProduct;
