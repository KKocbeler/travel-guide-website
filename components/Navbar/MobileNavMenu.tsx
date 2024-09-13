import React from 'react';
import '@/components/Navbar/MobileNavMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCity, faHome, faImages, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface MobileNavbarProps {
    isNavMenuOpen: boolean,
    toggleNavbar: () => void
}

interface Pages {
    href: string,
    icon: IconDefinition,
    label: string
}

const MobileNavMenu:React.FC<MobileNavbarProps> = ({isNavMenuOpen, toggleNavbar}) => {
    const pages:Pages[] = [
        { href: '/', icon: faHome, label: 'home' },
        { href: '/cities', icon: faCity, label: 'cities' },
        { href: '/contact', icon: faAddressCard, label: 'contact' },
        { href: '/gallery', icon: faImages, label: 'gallery' }
    ];

    return (
        <div className={`mobile-nav-menu ${isNavMenuOpen ? 'open' : ''}`}>
            <FontAwesomeIcon icon={faXmark} className='nav-close' onClick={toggleNavbar}/>
            <div className="mobile-body">
                <h1 className="title">OdysseyJourneys</h1>
                <ul className='mobile-list'>
                    {
                        pages?.map((page, index) => (
                            <li key={index}>
                                <Link href={page.href}  onClick={toggleNavbar}>
                                    <FontAwesomeIcon icon={page.icon} /> 
                                    <span>{page.label.charAt(0).toUpperCase() + page.label.slice(1)}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="mobile-login">
                    <Link href={'/authorization/login'} onClick={toggleNavbar}>Sign in</Link>
                </div>
                <div className="copyright">
                    Copyright © 2024 Kocbeler
                </div>
            </div>
        </div>
    )
}

export default MobileNavMenu