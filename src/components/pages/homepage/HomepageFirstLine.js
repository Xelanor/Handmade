import React from "react";
import styled from "styled-components";

const FirstLine = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 5px;
  margin-left: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) => props.color};
  width: 33.33%;
  height: 70px;
  margin-right: 5px;
  margin-left: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 5px;
  }
`;

const HomepageFirstLine = () => {
  return (
    <FirstLine>
      <InfoBox color="#042F4B">En Çok Satanlar</InfoBox>
      <InfoBox color="#ED1250">Günün Fırsatları</InfoBox>
      <InfoBox color="#FBC99D">Yeni Ürünler</InfoBox>
    </FirstLine>
  );
};

export default HomepageFirstLine;
