import React from 'react';
import './StandardHeaderSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const StandardHeaderSearch = () => {
  return (
    <div className="standard-header-search">
      <div className="header">
        <img src="path/to/airbnb-logo.png" alt="Airbnb" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Bordeaux" />
          <input type="text" placeholder="Feb 19-26" />
          <input type="text" placeholder="2 guests" />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
        <div className="header-right">
          <p>Become a Host</p>
          <div className="language-icon">🌐</div>
          <div className="menu-icon">☰</div>
        </div>
      </div>
      <div className="filters">
        <button>Price</button>
        <button>Type of place</button>
        <button>Free cancellation</button>
        <button>Wifi</button>
        <button>Kitchen</button>
        <button>Air conditioning</button>
        <button>Washer</button>
        <button>Iron</button>
        <button>Dedicated workspace</button>
        <button>Free parking</button>
        <button>Dryer</button>
        <button className="filters-button">
          <FilterListIcon /> Filters
        </button>
      </div>
    </div>
  );
};

export default StandardHeaderSearch;
