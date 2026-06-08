import React, { useState } from 'react';

const SignupPage = ({ onNavigate, onSignup }) => {
  const [inputs, setInputs] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agencyOption: 'yes'
  });

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.id || e.target.name]: e.target.value });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    onSignup({ fullName: inputs.fullName, email: inputs.email });
    onNavigate('profile');
  };

  return (
    <div className="page signup-screen">
      <div className="content-wrap">
        <button className="back-arrow" onClick={() => onNavigate('landing')}>←</button>
        <h1 className="screen-title">Create your PopX account</h1>

        <form onSubmit={handleRegistration} className="login-form">
          {[
            { id: 'fullName', label: 'Full Name', type: 'text', req: true },
            { id: 'phone', label: 'Phone number', type: 'text', req: true },
            { id: 'email', label: 'Email address', type: 'email', req: true },
            { id: 'password', label: 'Password', type: 'password', req: true },
            { id: 'company', label: 'Company name', type: 'text', req: false }
          ].map((item) => (
            <div className="floating-input-group" key={item.id}>
              <input
                type={item.type}
                id={item.id}
                placeholder=" "
                value={inputs[item.id]}
                onChange={handleInputChange}
                required={item.req}
              />
              <label htmlFor={item.id}>
                {item.label} {item.req && <span className="required">*</span>}
              </label>
            </div>
          ))}

          <div className="radio-group-wrapper">
            <label className="radio-group-title">Are you an Agency?<span className="required"> *</span></label>
            <div className="radio-flex">
              <label className="radio-option">
                <input type="radio" name="agencyOption" value="yes" checked={inputs.agencyOption === 'yes'} onChange={handleInputChange} />
                Yes
              </label>
              <label className="radio-option">
                <input type="radio" name="agencyOption" value="no" checked={inputs.agencyOption === 'no'} onChange={handleInputChange} />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary submit-btn-spaced">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
