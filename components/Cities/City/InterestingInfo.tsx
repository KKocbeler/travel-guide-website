import React from 'react';
import '@/components/Cities/City/InterestingInfo.css';
import { City } from '@/types/CityTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

interface InterestingProps {
    city: City
}

const InterestingInfo:React.FC<InterestingProps> = ({city}) => {
    const interestingTips  = city?.interestingtips;

    return (
        <div className="interesting-info">
            <div className="header-title">Interesting Information and Facts</div>
            <div className="facts">
                {
                    interestingTips?.map((info, index: number) => (
                        <div className="fact" key={index}>
                            <div className="fact-card">
                                <div className="title">{info.name}</div>
                                <p className='description'>{info.info}</p>
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default InterestingInfo