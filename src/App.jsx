import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import Redirection from './pages/Redirect';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Redirection} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
