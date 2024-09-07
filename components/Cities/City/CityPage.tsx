"use client"
import React, { useContext } from 'react'
import CityHeader from '@/components/Cities/City/CityHeader'
import Festivals from '@/components/Cities/City/Festivals'
import Legends from '@/components/Cities/City/Legends'
import LocalCuisine from '@/components/Cities/City/LocalCuisine'
import LocalFolks from '@/components/Cities/City/LocalFolks'
import PlaceToGo from '@/components/Cities/City/PlaceToGo'
import InterestingInfo from '@/components/Cities/City/InterestingInfo'
import { CityContext } from '@/context/CityContext'
import { useParams } from 'next/navigation'
import { City } from '@/types/CityTypes'

const CityPage = () => {
    const {cities, loading, error} = useContext(CityContext);
    const params = useParams();

    const city = cities?.find((city: City) => city.name === params.name);

    console.log(city)
  return (
    <div>
        <CityHeader city={city}/>
        <PlaceToGo city={city}/>
        <Festivals city={city}/>
        <LocalCuisine city={city}/>
        <LocalFolks city={city}/>
        <Legends city={city}/>
        <InterestingInfo city={city}/>
    </div>
  )
}

export default CityPage