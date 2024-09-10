import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import '@/components/Navbar/DesktopNavMenu.css'

const DesktopNavMenu = () => {
    return (
        <ul className="nav-menu-list">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/cities'}>Cities</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/gallery'}>Gallery</Link></li>
            <li>
                <Link className='login-button' href={'/authorization/login'}>
                    <FontAwesomeIcon icon={faUser}/>
                    <span>Login</span>
                </Link>
            </li>
        </ul>
    )
}

export default DesktopNavMenu