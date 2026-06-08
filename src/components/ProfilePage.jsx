import React from 'react';

const ProfilePage = ({ onNavigate, userData }) => {
  return (
    <div className="page profile-screen">
      <div className="content-wrap">
        <div className="top-settings-header">
          <h2 className="settings-title-text">Account Settings</h2>
        </div>

        <div className="profile-identity-card">
          <div className="avatar-frame-badge">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
              alt="User Avatar" 
              className="user-avatar-image"
            />
            <div className="camera-overlay-indicator">📷</div>
          </div>
          
          <div className="identity-text-stack">
            <h3 className="identity-name">{userData.fullName || 'Marry Doe'}</h3>
            <p className="identity-email">{userData.email || 'Marry@Gmail.com'}</p>
          </div>
        </div>

        <p className="profile-biography-narrative">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      
      <div className="dashed-border-separator"></div>
    </div>
  );
};

export default ProfilePage;
