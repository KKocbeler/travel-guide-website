"use client"
import React, { useContext } from 'react';
import '@/components/Home/HomeCities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CityContext } from '@/context/CityContext';
import { City } from '@/types/CityTypes';
import Link from 'next/link';

const HomeCities = () => {
    const {cities, loading, error} = useContext(CityContext);

    console.log(cities)

    return (
        <div className='home-cities container'>
            <div className="card-header">
                <h3>Cities</h3>
                <div className="slider-button">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div className="card-list">
                {
                    cities?.map((city:City, index: string) => (
                        <div className="card" key={index}>
                            <Link href={`/cities/${city.name}`}>
                                <div className="card-img">
                                    <img src={city.img} alt={city.name} />
                                </div>
                                <div className="card-body">
                                    {city.name}
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeCities