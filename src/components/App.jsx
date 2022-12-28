import React, { createContext, useState } from "react";

import NotFound from "./NotFound";

import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import browserHistory from "../browser-history";
import PrivateRoute from '../private-route';
import Api from "../api";

export const Ctx = createContext({});

const App = () => {

  
  return (
    <Ctx.Provider value={{

    }}>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path='/'>
            <h1>Hello</h1>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Ctx.Provider>
  );
};

export default App;
