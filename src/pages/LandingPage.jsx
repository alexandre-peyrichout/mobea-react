import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      landing page a faire:
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">signup</Link>
      <br />
      <Link to="/dashboard">dashboard</Link>
      <br />
      <Link to="/404">erreur 404</Link>
    </div>
  );
}

export default LandingPage;
