import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../Assests/Logo.png';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(Logo);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='nav'>
      <nav>
        <h1>
            Sophia's Music Library
        </h1>
      </nav>
      {}
    </div>
  );
};

export default NavBar;
