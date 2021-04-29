import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/navbar">
            <Navbar />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
