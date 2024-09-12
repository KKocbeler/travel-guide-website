"use client"
import React, { useContext, useRef, useState } from 'react';
import '@/components/Home/HomeCities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CityContext } from '@/context/CityContext';
import { City } from '@/types/CityTypes';
import Link from 'next/link';

const HomeCities = () => {
    const {cities, loading, error} = useContext(CityContext);
    const cardListRef = useRef<HTMLDivElement>(null);

    console.log(cardListRef);

    const scrollLeft = () => {
        if(cardListRef.current) {
            if(window.innerWidth >= 768) {
                cardListRef.current.scrollBy({ left: -800, behavior: 'smooth'})
            } else {
                cardListRef.current.scrollBy({ left: -420, behavior: 'smooth'})
            }
            
        } 
    }

    const scrollRight = () =>{
        if(cardListRef.current) {
            if(window.innerWidth >= 768) {
                cardListRef.current.scrollBy({ left: 800, behavior: 'smooth'})
            } else {
                cardListRef.current.scrollBy({ left: 420, behavior: 'smooth'})
            }
        }
    }

    console.log(cities)

    return (
        <div className='home-cities container'>
            <div className="card-header">
                <h2 className='header-title'>Cities</h2>
                <div className="slider-button">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={scrollLeft}/>
                    <FontAwesomeIcon icon={faChevronRight} onClick={scrollRight}/>
                </div>
            </div>
            <div className="card-list" ref={cardListRef}>
                {
                    cities?.map((city:City, index: number) => (
                        <div className="card" key={index}>
                                <div className="card-img">
                                    <Link href={`/cities/${city.name}`}>
                                        <img src={city.img} alt={city.name} />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    {city.name}
                                </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeCities