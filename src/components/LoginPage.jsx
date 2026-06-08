import React, { useState } from 'react';

const LoginPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onNavigate('profile');
  };

  return (
    <div className="page login-screen">
      <div className="content-wrap">
        <button className="back-arrow" onClick={() => onNavigate('landing')}>←</button>
        <h1 className="screen-title">Signin to your PopX account</h1>
        <p className="screen-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="floating-input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="email">Email Address <span className="required">*</span></label>
          </div>

          <div className="floating-input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="password">Password <span className="required">*</span></label>
          </div>

          <button type="submit" className="btn btn-submit-gray">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
