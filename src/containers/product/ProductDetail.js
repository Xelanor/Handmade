import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../../state/StateProvider";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StarRate from "@material-ui/icons/StarRate";

const ProductWrapper = styled.section`
  display: flex;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProductSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductBigImage = styled.img`
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
  }
`;

const ProductThumbImageSection = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: wrap;
`;

const ProductThumbImage = styled.img`
  height: 70px;
  width: 20%;
  object-fit: cover;
  margin-top: 8px;
  margin-right: 5px;
  border-radius: 5px !important;
  border: 2px solid #fff;
  cursor: pointer;
  user-select: none;
  ${({ active }) => active && `border: 2px solid #ED1250`};
`;

const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: #042f4b;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductDetailSection = styled.div`
  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ProductTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductSellerText = styled.div``;

const ProductRate = styled.div`
  color: #ed1250;
  margin-left: -5px;
`;

const ProductDescription = styled.span``;

const ProductOriginalPrice = styled.div`
  color: #4f4f4f;
  text-decoration: line-through;
  text-decoration-color: #ed1250;
  margin-right: 24px;
  margin-top: 5px;
`;

const ProductDiscountPrice = styled.div`
  margin-top: 5px;
  color: #4f4f4f;
`;

const CartButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ed1250;
  color: #fff6da;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 20px;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  user-select: none;
`;

const ProductPropertiesWrapper = styled.div`
  display: flex;
`;

const ProductPropertiesSectionFirst = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 50%;
  padding-right: 10px;
  border-right: 1px solid #fbc99d;
`;
const ProductPropertiesSectionSecond = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 50%;
  padding-left: 10px;
`;

const ProductPropertiesTitle = styled.div`
  text-decoration: underline;
  font-weight: 600;
`;

const ProductPropertiesText = styled.div``;

const ProductDetail = () => {
  const [, dispatch] = useStateValue();
  const [product, setProduct] = useState();
  const [activeImage, setActiveImage] = useState("");

  let { slug } = useParams();

  useEffect(() => {
    axios
      .get(`/api/products/${slug}`)
      .then((res) => {
        setProduct(res.data);
        setActiveImage(res.data.images[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product._id,
      },
    });
  };

  return (
    <ProductWrapper>
      {product ? (
        <ProductColumn>
          <ProductSection>
            <ProductImageSection>
              <ProductBigImage src={activeImage} />
              <ProductThumbImageSection>
                {product.images.map((image) => (
                  <ProductThumbImage
                    active={activeImage === image}
                    onClick={(_) => setActiveImage(image)}
                    src={image}
                  />
                ))}
              </ProductThumbImageSection>
            </ProductImageSection>
            <ProductDetailWrapper>
              <ProductDetailSection>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductSellerText>Satıcı: Esra Yıldız</ProductSellerText>
                <div style={{ display: "flex" }}>
                  {Array(product.rating)
                    .fill()
                    .map((_) => (
                      <ProductRate>
                        <StarRate />
                      </ProductRate>
                    ))}
                </div>
                <ProductDescription>{product.description}</ProductDescription>
                <div style={{ display: "flex" }}>
                  <ProductOriginalPrice>
                    {product.originalPrice}TL
                  </ProductOriginalPrice>
                  <ProductDiscountPrice>
                    {product.discountPrice}TL
                  </ProductDiscountPrice>
                </div>
                <CartButton onClick={addToBasket}>Sepete Ekle</CartButton>
                <ProductPropertiesWrapper>
                  <ProductPropertiesSectionFirst>
                    <ProductPropertiesTitle>
                      Ürün Özellikleri
                    </ProductPropertiesTitle>
                    {Object.keys(product.features).map((key) => (
                      <ProductPropertiesText>
                        {key}: {product.features[key]}
                      </ProductPropertiesText>
                    ))}
                  </ProductPropertiesSectionFirst>
                  <ProductPropertiesSectionSecond>
                    <ProductPropertiesTitle>
                      Ürün Açıklaması
                    </ProductPropertiesTitle>
                    <ProductPropertiesText>
                      {product.comment}
                    </ProductPropertiesText>
                  </ProductPropertiesSectionSecond>
                </ProductPropertiesWrapper>
              </ProductDetailSection>
            </ProductDetailWrapper>
          </ProductSection>
        </ProductColumn>
      ) : (
        <div></div>
      )}
    </ProductWrapper>
  );
};

export default ProductDetail;
