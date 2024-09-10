"use client"
import React, { useState } from 'react';
import '@/components/Home/HomeImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const HomeImage = () => {
    const [keyword, setKeyword] = useState<string>('')
    const router = useRouter();

    const handleSearchbar = (e:any) => {
        e.preventDefault();
        router.push(`cities/${keyword.charAt(0).toUpperCase() + keyword.slice(1).toLowerCase()}`)
        setKeyword('');
    }

    return (
        <div className='home-image container'>
            <div className="searchbar">
                <form className="form" onSubmit={handleSearchbar}>
                    <input type="text" placeholder='Search for a city...' onChange={(e) => setKeyword(e.target.value)}/>
                    <FontAwesomeIcon icon={faSearch} />
                </form>
            </div>      
        </div>
    )
}

export default HomeImage