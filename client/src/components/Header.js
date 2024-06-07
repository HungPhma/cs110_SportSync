import React from 'react';
import logo from '../Photo/project2.png'; // Make sure to replace with the actual path to your logo
import profilePic from '../Photo/user-default.png'; // Make sure to replace with the actual path to your profile picture
import notificationIcon from '../Photo/notification.svg'; // Make sure to replace with the actual path to your notification icon
import '../App.css';

const Header = () => {
  return (
    <div className="App-header">
      <div className="left-section">
        <button className="home-button">Home</button>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="center-section">
        <img src={logo} alt="Logo" className="App-logo" />
      </div>
      <div className="right-section">
        <img src={notificationIcon} alt="Notifications" className="notification-icon" />
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
