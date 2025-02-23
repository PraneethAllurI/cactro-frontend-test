// Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//import { Menu as MenuIcon, Notifications as NotificationsIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';

function Navbar() {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up the event listener
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white flex justify-around items-center p-4">
      {/* Left: Logo and Links */}
      <div className="flex  items-center space-x-35">
        {/* Logo */}
        <div className="text-lg font-semibold">
          <span className="text-green-500">HOURS</span> {/* Your logo text here */}
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-8">
          {['Dashboard', 'Projects', 'Team', 'Clients', 'Time', 'Reports'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`hover:text-green-500 ${active === item ? 'underline text-green-500' : ''}`}
              onClick={() => setActive(item)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Right: Notification, Profile Image, Username */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <NotificationsNoneIcon className="cursor-pointer" />
        </div>

        {/* Profile and Dropdown */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg" // Replace with your image URL
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex items-center space-x-1">
            <span>Username</span>
            <ArrowDropDownIcon onClick={handleMenuClick} />
            {menuOpen && (
              <div 
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <ul>
                  {['Profile', 'Settings', 'Logout', 'Help'].map((item) => (
                    <li key={item} className="hover:bg-gray-200 p-2 cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
