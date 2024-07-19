import React from 'react';
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src="http://pluspng.com/img-png/airbnb-logo-png-airbnb-logo-white-on-black-1600.png" className="header_logo" alt="logo" />
      <div className="header_center">
        <p>Places to stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="header_dropdowns">
          <div className='menu_icon'>
          <MenuIcon />
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
