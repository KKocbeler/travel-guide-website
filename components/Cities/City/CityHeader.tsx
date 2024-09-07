import React from 'react';
import '@/components/Cities/City/CityHeader.css';
import { City } from '@/types/CityTypes';

interface HeaderProps {
    city: City
}

const CityHeader:React.FC<HeaderProps> = ({city}) => {


  return (
    <div className='city-header'>
        <div className="city-title">
           {city?.name}
        </div>
        <p className="city-history">
            {city?.history}
        </p>
    </div>
  )
}

export default CityHeader