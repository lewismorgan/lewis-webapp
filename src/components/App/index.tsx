import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Home from 'containers/Home';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
