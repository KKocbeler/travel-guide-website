import React from 'react';
import '@/components/Home/HomeAbout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCalendar, faGem } from '@fortawesome/free-solid-svg-icons';

const HomeAbout = () => {
  return (
    <div className='ali'>
        <div className="home-about-title">
            Why we are different
        </div>
        <div className="home-about container">
            <div className="card">
                <FontAwesomeIcon icon={faCalendar} />
                <h4>Best Experience</h4>
                <p>Our cafe offers a unique and memorable experience, combining great food, cozy ambiance, and friendly service.</p>
            </div>
            <div className="card">
                <FontAwesomeIcon icon={faGem} />
                <h4>Quality Coffee</h4>
                <p>We source the finest coffee beans from around the world to provide you with the best tasting coffee.</p>
            </div>
            <div className="card">
                <FontAwesomeIcon icon={faBagShopping} />
                <h4>Free Wi-Fi</h4>
                <p>Enjoy our high-speed internet connection while you relax with a cup of coffee or work on your laptop.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout