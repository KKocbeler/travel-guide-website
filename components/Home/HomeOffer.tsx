import React from 'react';
import '@/components/Home/HomeOffer.css';
import Link from 'next/link';

const HomeOffer = () => {
  return (
    <div className='home-offer container'>
        <h3>Contact Us</h3>
        <div className="offer-card">
            <div className="card-body">
                <h4>Get in Touch</h4>
                <p>If you have any questions or need further assistance, feel free to contact us. We are here to help you with your journey!</p>
                <Link href={'/contact'}>Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeOffer