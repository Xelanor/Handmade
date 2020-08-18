import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const CheckoutSummary = () => {
  return (
    <>
      <Wrapper>
        <div className="flex justify-end text-xl border-b-2 border-hand3">
          Sepet Tutarı
        </div>
        <div className="flex justify-end text-sm mt-2">Toplam 4 adet ürün</div>
        <div className="flex justify-between items-center mt-2">
          <div>Ürünler Toplamı</div>
          <div className="text-hand3 whitespace-no-wrap">519,97 TL</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>Kargo Ücreti</div>
          <div className="text-hand3">0,00 TL</div>
        </div>
        <div className="flex justify-end text-xs text-right underline mt-2">
          Ödenmesi Gereken Tutar (KDV Dahil)
        </div>
        <div className="flex justify-end text-hand3 text-xl font-semibold mt-1 mb-6">
          519,97TL
        </div>
      </Wrapper>
      <div className="bg-hand4 py-2 px-4 -mt-5 text-hand2 text-center rounded-md w-4/5 mx-auto whitespace-no-wrap cursor-pointer select-none">
        Alışverişi Tamamla
      </div>
    </>
  );
};

export default CheckoutSummary;
