import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Redirect from './pages/Redirect';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from '../src/components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Redirect} />
      </div>
      <div>
        <Route path="/login" component={Login} />
      </div>
      <div>
        <Route path="/signup" component={Signup} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
