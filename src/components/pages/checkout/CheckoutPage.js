import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "../../../state/StateProvider";
import axios from "axios";
import Loader from "react-loader-spinner";

import Product from "./Product";
import CheckoutSummary from "./CheckoutSummary";

const Container = styled.div`
  display: flex;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductsContainer = styled.div`
  width: 75%;
  padding: 10px 5px 10px 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 250px;
  }
`;

const SummaryContainer = styled.div`
  width: 25%;
  padding: 10px 10px 10px 5px;

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 28%;
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [products, setProducts] = useState();
  const [basketTotal, setBasketTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let basketItems = Object.keys(basket);
    if (basketItems.length > 0) {
      axios
        .post("/api/products/checkout", { products: basketItems })
        .then((res) => {
          let basketValue = 0;
          setProducts(res.data);
          res.data.map((product) => {
            return (basketValue += product.discountPrice * basket[product._id]);
          });
          setBasketTotal(basketValue.toFixed(2));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setProducts([]);
      setBasketTotal(0);
      setLoading(false);
    }
  }, [basket]);

  const removeFromBasket = (id) => {
    let newProducts = [...products];
    newProducts = newProducts.filter((product) => {
      return product._id !== id;
    });
    setProducts(newProducts);

    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
      },
    });
  };

  const incrementProduct = (id) => {
    dispatch({
      type: "INCREMENT_PRODUCT",
      item: {
        id,
      },
    });
  };

  const decrementProduct = (id) => {
    dispatch({
      type: "DECREMENT_PRODUCT",
      item: {
        id,
      },
    });
  };

  return (
    <Container>
      <ProductsContainer>
        {products ? (
          products.length === 0 ? (
            <div>Sepetinizde ürün bulunmamaktadır.</div>
          ) : (
            products.map((product) => {
              return (
                <Product
                  key={product._id}
                  amount={basket[product._id]}
                  product={product}
                  increment={incrementProduct}
                  decrement={decrementProduct}
                  remove={removeFromBasket}
                />
              );
            })
          )
        ) : (
          <LoaderContainer>
            <Loader type="ThreeDots" color="#042f4b" height="100" width="100" />
          </LoaderContainer>
        )}
      </ProductsContainer>
      <SummaryContainer>
        <CheckoutSummary total={basketTotal} />
      </SummaryContainer>
      {loading ? (
        <LoaderContainer>
          <Loader type="ThreeDots" color="#042f4b" height="100" width="100" />
        </LoaderContainer>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default CheckoutPage;
