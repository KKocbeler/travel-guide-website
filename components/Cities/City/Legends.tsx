"use client"
import React, { useState } from 'react';
import '@/components/Cities/City/Legends.css';
import { City } from '@/types/CityTypes';

interface LegendsProps {
    city: City
}
const Legends:React.FC<LegendsProps> = ({city}) => {
    const [showStory, setShowStory] = useState(false);
    const legend = city?.legend;

    return (
        <div className="legends">
            <div className='myth'>
                <div className="title">{legend?.title}</div>
                <p className={`story ${showStory ? 'show'  : ''}`} onClick={() => setShowStory(!showStory)}>
                    {legend?.story}
                </p>
            </div>
        </div>
    )
}

export default Legends