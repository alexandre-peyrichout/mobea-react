import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      landing page a faire:
      <Link to="/login">Login</Link>
      <Link to="/signup">Login</Link>
      <Link to="/dashboard">Login</Link>
      <Link to="/404">Login</Link>
    </div>
  );
}

export default LandingPage;
