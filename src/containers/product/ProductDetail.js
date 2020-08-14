import React, { useState, useEffect } from "react";
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
  height: 600px;
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 400px;
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
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    setActiveImage(
      "https://cdn.shopify.com/s/files/1/1680/3505/products/tobaccoweb2_dfec8d69-efcb-4957-b681-f8c673189fb9_grande.jpg?v=1583234172"
    );
  }, []);

  let { slug } = useParams();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: 123,
        title: 123123,
      },
    });
  };

  return (
    <ProductWrapper>
      <ProductColumn>
        <ProductSection>
          <ProductImageSection>
            <ProductBigImage src={activeImage} />
            <ProductThumbImageSection>
              <ProductThumbImage
                active={
                  activeImage ===
                  "https://cdn.shopify.com/s/files/1/1680/3505/products/tobaccoweb2_dfec8d69-efcb-4957-b681-f8c673189fb9_grande.jpg?v=1583234172"
                }
                onClick={(e) => setActiveImage(e.target.src)}
                src="https://cdn.shopify.com/s/files/1/1680/3505/products/tobaccoweb2_dfec8d69-efcb-4957-b681-f8c673189fb9_grande.jpg?v=1583234172"
              />
              <ProductThumbImage
                active={
                  activeImage ===
                  "https://productimages.hepsiburada.net/l/37/600-800/10566778880050.jpg"
                }
                onClick={(e) => setActiveImage(e.target.src)}
                src="https://productimages.hepsiburada.net/l/37/600-800/10566778880050.jpg"
              />
              <ProductThumbImage
                active={
                  activeImage ===
                  "https://productimages.hepsiburada.net/l/37/500/10566778945586.jpg"
                }
                onClick={(e) => setActiveImage(e.target.src)}
                src="https://productimages.hepsiburada.net/l/37/500/10566778945586.jpg"
              />
              <ProductThumbImage
                active={
                  activeImage ===
                  "https://productimages.hepsiburada.net/l/37/500/10566778978354.jpg"
                }
                onClick={(e) => setActiveImage(e.target.src)}
                src="https://productimages.hepsiburada.net/l/37/500/10566778978354.jpg"
              />
            </ProductThumbImageSection>
          </ProductImageSection>
          <ProductDetailWrapper>
            <ProductDetailSection>
              <ProductTitle>El yapımı Cüzdan</ProductTitle>
              <ProductSellerText>Satıcı: Esra Yıldız</ProductSellerText>
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
              <ProductDescription>
                Tamamiyle dana derisinden yapılmıştır. Genişliği 9 cm olup
                tamamen el işlemesiyle yapılmıştır.
              </ProductDescription>
              <div style={{ display: "flex" }}>
                <ProductOriginalPrice>139.99TL</ProductOriginalPrice>
                <ProductDiscountPrice>109.99TL</ProductDiscountPrice>
              </div>
              <CartButton onClick={addToBasket}>Sepete Ekle</CartButton>
              <ProductPropertiesWrapper>
                <ProductPropertiesSectionFirst>
                  <ProductPropertiesTitle>
                    Ürün Özellikleri
                  </ProductPropertiesTitle>
                  <ProductPropertiesText>
                    Hammaddesi: Dana Derisi
                  </ProductPropertiesText>
                  <ProductPropertiesText>Genişlik: 8 cm</ProductPropertiesText>
                  <ProductPropertiesText>Uzukluk: 17 cm</ProductPropertiesText>
                  <ProductPropertiesText>
                    Renk: Kahverengi
                  </ProductPropertiesText>
                </ProductPropertiesSectionFirst>
                <ProductPropertiesSectionSecond>
                  <ProductPropertiesTitle>
                    Ürün Açıklaması
                  </ProductPropertiesTitle>
                  <ProductPropertiesText>
                    Erkeklere özel günlerde alınabilecek olan güzel bir hediye.
                    Genelde resmi giyinmeyi tercih edenlerin tercih ettiği bir
                    model.
                  </ProductPropertiesText>
                </ProductPropertiesSectionSecond>
              </ProductPropertiesWrapper>
            </ProductDetailSection>
          </ProductDetailWrapper>
        </ProductSection>
      </ProductColumn>
    </ProductWrapper>
  );
};

export default ProductDetail;
