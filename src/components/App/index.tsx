import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from 'containers/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

export function App(): JSX.Element {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ParallaxProvider>
  );
}
