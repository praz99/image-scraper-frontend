import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Images from './components/Images';
import NotFound from './components/Notfound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/images" component={Images} />
      <Route excat component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;