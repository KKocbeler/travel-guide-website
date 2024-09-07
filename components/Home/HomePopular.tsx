"use client"
import React, { useContext, useEffect, useState } from 'react';
import '@/components/Home/HomePopular.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { CityContext } from '@/context/CityContext';
import { City } from '@/types/CityTypes';

const HomePopular = () => {

const {cities, loading, error} = useContext(CityContext);
const [selectedCity, setSelectedCity] = useState<City[]>([])

useEffect(() => {
    const popularCities = () => {
        const PickedCities = cities?.filter((city: City) => city.id && city.id % 2 === 0);
        setSelectedCity(PickedCities)
    }

    popularCities();
},[cities])

console.log(cities)
console.log(selectedCity)

return (
    <div className='home-popular container'>
        <div className="header-title">
            <h3>Trending Destinations</h3>
        </div>
        <div className="popular-cities">
            {
                selectedCity?.map((city, index) => (
                    <div className={`city ${index < 2 ? 'grid-span-3' : 'grid-span-2'}`} key={index}>
                        <Link href={'#'}>
                            <img src={city.img} alt={city.name}/>
                            <div className='city-name'>
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

export default HomePopular