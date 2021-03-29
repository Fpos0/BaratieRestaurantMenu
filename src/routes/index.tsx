import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DisplayCheck } from '../pages/DisplayCheck';
import { DisplayMenu } from '../pages/DisplayMenu';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DisplayMenu} />
    <Route path="/check" component={DisplayCheck} />
  </Switch>
);

export default Routes;
