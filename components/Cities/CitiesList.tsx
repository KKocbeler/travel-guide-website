"use client"
import '@/components/Cities/CitiesList.css';
import { CityContext } from '@/context/CityContext';
import { City } from '@/types/CityTypes';
import Link from 'next/link';
import { useContext } from 'react';

const CitiesList = () => {
    const {cities, loading, error} = useContext(CityContext);
  return (
    <div className='cities'>
        <div className="title">Cities</div>
        <div className="city-list">
            {
                cities?.map((city:City, index:string) => (
                    <div className="city-card" key={index}>
                        <div className="city-card-body">
                            <div className="card-img">
                                <Link href={`/cities/${city.name}`}>
                                    <img src={city.img} alt={city.name} />
                                </Link>
                            </div>
                        </div>
                        <div className="city-name">
                            <Link href={`/cities/${city.name}`}>{city.name}</Link>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default CitiesList