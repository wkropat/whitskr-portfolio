// Header contains navigation and appears on every page
import React from 'react';
import Navigator from './navigation';


function Header() {
    return (
       <header className="header">
            <h1>Whitney Kropat</h1>
            <Navigator />
        </header>
    );
  }


export default Header;