import React from 'react';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="page landing-screen">
      <div className="content-wrap">
        
        <h1 className="brand-title">Welcome to PopX</h1>
        <p className="brand-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="action-buttons">
        <button className="btn btn-primary" onClick={() => onNavigate('signup')}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={() => onNavigate('login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
