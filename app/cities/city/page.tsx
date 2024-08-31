import React from 'react'
import CityHeader from '@/components/Cities/City/CityHeader'
import Festivals from '@/components/Cities/City/Festivals'
import Legends from '@/components/Cities/City/Legends'
import LocalCuisine from '@/components/Cities/City/LocalCuisine'
import LocalFolks from '@/components/Cities/City/LocalFolks'
import PlaceToGo from '@/components/Cities/City/PlaceToGo'
import InterestingInfo from '@/components/Cities/City/InterestingInfo'

const page = () => {
  return (
    <div className='container'>
        <CityHeader />
        <PlaceToGo />
        <Festivals />
        <LocalCuisine />
        <LocalFolks />
        <Legends />
        <InterestingInfo />
    </div>
  )
}

export default page