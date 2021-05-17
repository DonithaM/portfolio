import React from "react";
// import "./App.css";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/about">
            <About />
          </Route>
           */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
