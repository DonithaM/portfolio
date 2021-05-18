import React from "react";
import GroupSlider from "./components/AllProjects/ProjectsSlider";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages";
import Projects from "./components/AllProjects";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects slides={GroupSlider} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
