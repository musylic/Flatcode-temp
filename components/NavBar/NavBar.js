import React from 'react';
import Link from 'next/link';
import logo from '../../public/images/logo/Flatcode_GB.png';

 
const NavBar = () => {



    return (
        <div className="navbar">
            <Link href="/"><div className="nav-logo"><img src={logo.src} alt="logo Flatcode" /></div></Link>

           
        </div>
    );
};

export default NavBar;