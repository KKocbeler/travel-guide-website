import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import '@/components/Cities/City/Festivals.scss';
import { City } from '@/types/CityTypes';

interface FestivalsProps {
  city: City
}

const Festivals:React.FC<FestivalsProps> = ({city}) => {
    const festivals = city?.festivals
    const capitalize = (str:string) => str.charAt(0).toUpperCase() + str.slice(1)

    return (
        <div className="festivals">
            <div className="header-title">Festivals</div>
            <div className="fest-list">
                {
                    festivals?.map((festival, index: number) => (
                        <div className="festival" key={index}>
                            <div className="title">{festival.name}</div>
                            <div className="description">{festival.description}</div>
                            <div className='features'>
                                <div className="title">Features</div>
                                <ul className='features-list'>
                                    {
                                        festival.features.map((item, index) => (
                                            <li key={index}><FontAwesomeIcon icon={faCheck} /> {capitalize(item)}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="date">{festival.date}</div>
                        </div>
                    ))
                }
            </div>
        </div>  
    )
}

export default Festivals