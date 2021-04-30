import React from "react";
// import "./App.css";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <div>
        <Switch>
          <Route exact path="/navbar"> */}
      <Home />
      {/* </Route>
        </Switch>
      </div> */}
    </BrowserRouter>
  );
};

export default App;
