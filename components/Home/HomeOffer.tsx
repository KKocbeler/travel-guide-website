import React from 'react';
import '@/components/Home/HomeOffer.css';
import Link from 'next/link';

const HomeOffer = () => {
  return (
    <div className='home-offer container'>
        <h3>Offer</h3>
        <p>Promotions, deals and special for you</p>
        <div className="offer-card">
            <div className="card-body">
                <h4>Seize the moment</h4>
                <p>Save 15% or more when you book and stay before 1 October 2024</p>
                <Link href={'#'}>Find Gateway Deals</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeOffer