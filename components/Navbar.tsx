import React from 'react';
import '@/components/Navbar.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
        <nav>
            <div className="nav-logo">
                <Link href={'/'}>
                    OdysseyJourneys
                </Link>
            </div>
            <div className="nav-menu">
                <ul className="nav-menu-list">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/cities'}>Cities</Link></li>
                    <li><Link href={'/contact'}>Contact</Link></li>
                    <li><Link href={'/'}>About</Link></li>
                    <li>
                        <Link className='login-button' href={'/authorization/login'}>
                            <FontAwesomeIcon icon={faUser}/>
                            <span>Login</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar