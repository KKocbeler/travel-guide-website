import React from 'react';
import '@/components/Cities/City/LocaleCuisine.scss';
import { City } from '@/types/CityTypes';

interface LocalCuisineProps {
    city: City
}

const LocalCuisine:React.FC<LocalCuisineProps> = ({city}) => {
    const localeCuisine = city?.localcuisine;
    return (
        <div className="local-cuisine">
            <div className="header-title">Local Cuisine</div>
            <div className="food-list">
                {
                    localeCuisine?.map((item, index: number) => (
                        <div className="food" key={index}>
                            <div className="image">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="body">
                                <div className="title">{item.name}</div>
                                <div className="desc">{item.description}</div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default LocalCuisine