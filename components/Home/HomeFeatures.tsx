import React from 'react';
import '@/components/Home/HomeFeatures.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCircleCheck, faGem, faMapSigns, faSearch } from '@fortawesome/free-solid-svg-icons';

const HomeFeatures = () => {
  return (
    <div className='home-features container'>
        <h3>OdysseyJourneys Features</h3>
        <div className="features-section">
            <div className="section">
                <div className="section-icon">
                    <FontAwesomeIcon icon={faGem} />
                </div>
                <h4>Big Names, Great Deals</h4>
                <p>Get information about the most famous historical sites and discover amazing travel deals.</p>
            </div>
            <div className="section">
                <div className="section-icon">
                        <FontAwesomeIcon icon={faMapSigns} />
                </div>
                <h4>Comprehensive Guidance</h4>
                <p>Provides detailed guidance for each historical site, including places to visit, local events, and visitor tips.</p>
            </div>
            <div className="section">
                <div className="section-icon">
                        <FontAwesomeIcon icon={faSearch} />
                </div>
                <h4>Search with Peace of Mind</h4>
                <p>Your searches on our site will not affect the prices you see. We always offer transparent and fair prices.</p>
            </div>
            <div className="section">
                <div className="section-icon">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <h4>Flexible Booking</h4>
                <p>Easily find tours and hotels with flexible booking options, giving you the freedom to change your plans.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeFeatures