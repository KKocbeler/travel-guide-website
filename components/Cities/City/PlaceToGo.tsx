import React from 'react';
import '@/components/Cities/City/PlaceToGo.scss';
import { City } from '@/types/CityTypes';

interface PlaceToGoProps {
    city: City
}
const PlaceToGo:React.FC<PlaceToGoProps> = ({city}) => {
    const places = city?.placestogo;

    console.log(places)
  return (
    <div className="place-to-go">
        <div className="header-title">Place to go</div>
        <div className="places">
            {
                places?.map((place, index: number) => (
                    <div className="place" key={index}>
                        <div className="image">
                            <img src={place.img} alt={place.name} />
                        </div>
                        <div className="card-body">
                            <div className="title">{place.name}</div>
                            <p className="description"> {place.history}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default PlaceToGo