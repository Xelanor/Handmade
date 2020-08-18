import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ThemeProvider } from "styled-components";

import { useStateValue } from "./state/StateProvider";

import Header from "./components/layout/Header/Header";
import Homepage from "./components/pages/homepage/Homepage";
import ProductDetail from "./containers/product/ProductDetail";
import CheckoutPage from "./components/pages/checkout/CheckoutPage";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      dispatch({
        type: "SET_CURRENT_USER",
        user: decoded,
      });
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        dispatch({
          type: "LOGOUT_USER",
        });
        window.location.href = "./login";
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.cart);
      dispatch({
        type: "SET_BASKET",
        basket: cart,
      });
    }
  }, []);

  const theme = {
    colors: {
      primary: "#042F4B",
      secondary: "#FFF6DA",
      alternative: "#FBC99D",
      action: "#ED1250",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/sepetim" component={CheckoutPage}></Route>
          <Route path="/urun/:slug" component={ProductDetail}></Route>
          <Route path="/" component={Homepage}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
