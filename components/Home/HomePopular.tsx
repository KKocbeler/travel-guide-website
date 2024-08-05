import React from 'react';
import '@/components/Home/HomePopular.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HomePopular = () => {
  return (
    <div className='home-popular container'>
        <div className="title">
            <h3>Trending Destinations</h3>
            <p>The most popular historical cities chosen by travelers.</p>
        </div>
        <div className="cities">
            <div className="city grid-span-3">
                <Link href={'#'}>
                    <Image src={'/img/home/header.jpg'} width={300} height={200} alt={'name-city'} />
                    <div className='city-name'>
                        Paris <FontAwesomeIcon icon={faFlag} />
                    </div>
                </Link>
            </div>
            <div className="city grid-span-3">
                <Link href={'#'}>
                    <Image src={'/img/home/header.jpg'} width={300} height={200} alt={'name-city'} />
                    <div className='city-name'>
                        Paris <FontAwesomeIcon icon={faFlag} />
                    </div>
                </Link>
            </div>
            <div className="city grid-span-2">
                <Link href={'#'}>
                    <Image src={'/img/home/header.jpg'} width={300} height={200} alt={'name-city'} />
                    <div className='city-name'>
                        Paris <FontAwesomeIcon icon={faFlag} />
                    </div>
                </Link>
            </div>
            <div className="city grid-span-2">
                <Link href={'#'}>
                    <Image src={'/img/home/header.jpg'} width={300} height={200} alt={'name-city'} />
                    <div className='city-name'>
                        Paris <FontAwesomeIcon icon={faFlag} />
                    </div>
                </Link>
            </div>
            <div className="city grid-span-2">
                <Link href={'#'}>
                    <Image src={'/img/home/header.jpg'} width={300} height={200} alt={'name-city'} />
                    <div className='city-name'>
                        Paris <FontAwesomeIcon icon={faFlag} />
                    </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default HomePopular