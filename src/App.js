import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Homepage from "./components/pages/homepage/Homepage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Homepage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
