import React from 'react';
import '@/components/Home/HomeCities.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HomeCities = () => {
  return (
    <div className='home-cities container'>
        <div className="card-header">
            <h3>Cities</h3>
            <div className="slider-button">
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
        <div className="card-list">
            <div className="card">
                <div className="card-img">
                    <Image src="/img/home/moskova.jpg" width={200} height={300} alt='moskova'/>
                </div>
                <div className="card-body">
                    Moskow
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <Image src="/img/home/moskova.jpg" width={200} height={300} alt='moskova'/>
                </div>
                <div className="card-body">
                    Moskow
                </div>
            </div> 
            <div className="card">
                <div className="card-img">
                    <Image src="/img/home/moskova.jpg" width={200} height={300} alt='moskova'/>
                </div>
                <div className="card-body">
                    Moskow
                </div>
            </div>           
            <div className="card">
                <div className="card-img">
                    <Image src="/img/home/moskova.jpg" width={200} height={300} alt='moskova'/>
                </div>
                <div className="card-body">
                    Moskow
                </div>
            </div>           
            <div className="card">
                <div className="card-img">
                    <Image src="/img/home/moskova.jpg" width={200} height={300} alt='moskova'/>
                </div>
                <div className="card-body">
                    Moskow
                </div>
            </div>  
            <div className="card">
                <div className="card-img">
                    <Image src="/img/home/moskova.jpg" width={200} height={300} alt='moskova'/>
                </div>
                <div className="card-body">
                    Moskow
                </div>
            </div>        
        </div>
    </div>
  )
}

export default HomeCities