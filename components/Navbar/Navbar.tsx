"use client"
import React, { useState } from 'react';
import '@/components/Navbar/Navbar.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNavMenu from './MobileNavMenu';
import DesktopNavMenu from './DesktopNavMenu';

const Navbar = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

    const toggleNavbar = () => {
        setIsNavMenuOpen(!isNavMenuOpen)
    }
  return (
        <nav>
            <div className="nav-logo">
                <Link href={'/'}>
                    OdysseyJourneys
                </Link>
            </div>
            <div className="nav-menu">
                <MobileNavMenu isNavMenuOpen={isNavMenuOpen} toggleNavbar={toggleNavbar}/>
                <DesktopNavMenu />
            </div>
            <div className="mobile-navbar">
                <FontAwesomeIcon icon={faBars} onClick={toggleNavbar}/>
            </div>
        </nav>
  )
}

export default Navbar