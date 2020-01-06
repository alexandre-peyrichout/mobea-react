import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import LandingPage from './pages/LandingPage';
import Faq from './pages/Faq';
import Politique from './pages/Politique';
import Contact from './pages/Contact';
import Context from './context/Context';

const App = () => (
  <div>
    <Context.Provider value={{ test: 'test du state' }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/faq" component={Faq} />
          <Route path="/politique" component={Politique} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  </div>
);
export default App;
