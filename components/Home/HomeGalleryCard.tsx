import React from 'react';
import '@/components/Home/HomeGalleryCard.css';
import Image from 'next/image';
import Link from 'next/link';

const HomeGalleryCard = () => {
  return (
    <div className='container'>
        <Link href={'#'}>
            <div className="gallery-card">
                <div className="gallery-img">
                    <Image src={'/img/home/moskova.jpg'} width={150} height={120} alt='gallery-img'/>
                </div>
                <div className="gallery-body">
                    <h3>Outdoors in the Bay & Beyond</h3>
                    <p>
                        Buckle up for an extraordinary ride where hushed groves of noble redwoods guide you directly into irresistible San Francisco.
                        The outdoor adventures on this road trip include lush botanical gardens,
                        the iconic Golden Gate Bridge and an authentic street food tour of San Francisco's Chinatown.
                    </p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default HomeGalleryCard