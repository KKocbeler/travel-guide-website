import React from 'react';
import '@/components/Home/HomeImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HomeImage = () => {
    
    return (
        <div className='home-image container'>
            <div className="searchbar">
                <div className="form">
                    <input type="text" placeholder='Search for a city...' />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>      
        </div>
    )
}

export default HomeImage