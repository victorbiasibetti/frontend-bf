import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cam from './pages/Cam';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cam" exact component={Cam} />
      </Switch>
    </BrowserRouter>
  );
}
