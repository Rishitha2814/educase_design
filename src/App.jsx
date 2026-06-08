import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import './App.css';

function App() {
  // Navigation views: 'landing', 'login', 'signup', or 'profile'
  const [view, setView] = useState('landing');
  
  // App-wide state tracking the user details
  const [userData, setUserData] = useState({
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.com'
  });

  return (
    <div className="app-container">
      <div className="mobile-frame">
        {view === 'landing' && <LandingPage onNavigate={setView} />}
        {view === 'login' && <LoginPage onNavigate={setView} />}
        {view === 'signup' && <SignupPage onNavigate={setView} onSignup={setUserData} />}
        {view === 'profile' && <ProfilePage onNavigate={setView} userData={userData} />}
      </div>
    </div>
  );
}

export default App;
