import React, { useState, useEffect } from 'react';
import logo from '../Photo/project2.png'; // Ensure the path to your logo is correct
import profilePic from '../Photo/user-default.png'; // Ensure the path to your profile picture is correct
import notificationIcon from '../Photo/notification.svg'; // Ensure the path to your notification icon is correct
import searchIcon from '../Photo/search.png'; // Ensure the path to your search icon is correct
import '../App.css';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    // Clear the previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const startTimeout = () => {
    const newTimeoutId = setTimeout(() => {
      setIsSearchVisible(false);
    }, 5000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    if (isSearchVisible) {
      startTimeout();

      // Cleanup function to clear the timeout when the component unmounts or when searchQuery changes
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }
  }, [isSearchVisible]);

  useEffect(() => {
    // Clear the timeout and reset it when searchQuery changes
    if (isSearchVisible) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      startTimeout();
    }
  }, [searchQuery]);

  return (
    <div className="App-header">
      <div className="left-section">
        {isSearchVisible ? (
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value={searchQuery}
            onChange={handleInputChange}
            onBlur={() => {
              if (!searchQuery) {
                setIsSearchVisible(false);
              }
            }}
          />
        ) : (
          <img src={searchIcon} alt="Search" className="search-icon" onClick={handleSearchClick} />
        )}
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
