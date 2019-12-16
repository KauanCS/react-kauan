import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { About } from "./About";
import Game from "./Game";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Game} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
