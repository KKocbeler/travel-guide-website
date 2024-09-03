"use-client"

import React, { useState } from 'react';
import '@/components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    interface fList {
        title: string,
        list: string[],
    }

    const footerList: fList[] = [
        {"title": 'Support', "list": ["About", "Jobs", "Partnership", "Advertising", "Feedback"]},
        {"title": 'Explore', "list": ["Europe travel guide", "Domestic flights", "All accommodation"]},
        {"title": 'Policies', "list": ["Privacy", "Cookies", "Term of use", "Accessibility", "Your privacy choices"]},
        {"title": 'Help', "list": ["Support", "Cancel your tour", "Use an Expedia coupon", "International trave documents"]}
    ]

    const [openLists, setOpenLists] = useState<boolean[]>(new Array(footerList.length).fill(false));

    const toggleList = (index: number) => {
        if (window.innerWidth < 768) {
            setOpenLists(openLists.map((isOpen, i) => i === index ? !isOpen : isOpen));
        }
    }

  return (
    <footer className='container'>
        <div className="footer-main">
            {
                footerList.map((list, index) => (
                    <div className="footer-card" key={index}>
                        <div className="title" onClick={() => toggleList(index)}>
                            <h3>{list.title}</h3>
                            <FontAwesomeIcon icon={openLists[index] ? faAngleUp : faAngleDown} />
                        </div>
                        <ul className={openLists[index] ? 'show' : ''}>
                            {
                                list.list.map((li, index) => (
                                    <li key={index}>
                                        <Link href={'#'}>{li}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
            
        </div>
        <div className="footer-social">
            <div className="links">
                <Link href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
            </div>
            <p>Copyright © Kocbeler. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer