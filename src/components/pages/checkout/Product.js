import React from "react";
import styled from "styled-components";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 10px solid ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  height: 120px;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-right: 1px solid #fbc99d;
`;

const ProductName = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductSeller = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
`;

const ProductDescription = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`;

const NumbersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ColumnWrapperFirst = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnWrapperSecond = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleText = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

const StyledText = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  text-align: center;
`;

const RemoveBasketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.action};
  border-radius: 5px;
`;

const RemoveBasketText = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  white-space: nowrap;
  padding: 4px 10px;

  @media (max-width: 768px) {
    padding: 4px 36px;
  }
`;

const IconWrapper = styled.div`
  padding: 1px;
  height: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Product = ({ product, remove }) => {
  return (
    <Container>
      <div className="flex">
        <ProductImage src={product.images[0]} />
        <ProductDetail>
          <ProductName>{product.name}</ProductName>
          <ProductSeller>Satıcı: Esra Yıldız</ProductSeller>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductDetail>
      </div>
      <div className="flex justify-center">
        <ActionsWrapper>
          <NumbersWrapper>
            <ColumnWrapperFirst>
              <StyledTitleText>ADET</StyledTitleText>
              <StyledText>1</StyledText>
            </ColumnWrapperFirst>
            <ColumnWrapperSecond>
              <StyledTitleText>FİYAT</StyledTitleText>
              <StyledText>{product.discountPrice}</StyledText>
            </ColumnWrapperSecond>
          </NumbersWrapper>
          <RemoveBasketContainer
            onClick={() => remove(product._id)}
            className="cursor-pointer select-none"
          >
            <RemoveBasketText>Ürünü Sepetten Kaldır</RemoveBasketText>
            <IconWrapper>
              <DeleteOutlinedIcon />
            </IconWrapper>
          </RemoveBasketContainer>
        </ActionsWrapper>
      </div>
    </Container>
  );
};

export default Product;
