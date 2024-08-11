import React from 'react';
import '@/components/Home/HomeTourCards.css';
import Image from 'next/image';

const HomeTourCards = () => {
  return (
    <div className='home-tour-cards container'>
        <h3>Trending Tours</h3>
        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <Image src={'/img/home/madrid.jpeg'} width={100} height={120} alt='tour-card' />
                </div>
                <div className="card-body">
                    <div className="title">Athens</div>
                    <div className="desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <Image src={'/img/home/madrid.jpeg'} width={100} height={120} alt='tour-card' />
                </div>
                <div className="card-body">
                    <div className="title">Athens</div>
                    <div className="desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                </div>
            </div> 
            <div className="card">
                <div className="card-img">
                    <Image src={'/img/home/madrid.jpeg'} width={100} height={120} alt='tour-card' />
                </div>
                <div className="card-body">
                    <div className="title">Athens</div>
                    <div className="desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <Image src={'/img/home/madrid.jpeg'} width={100} height={120} alt='tour-card' />
                </div>
                <div className="card-body">
                    <div className="title">Athens</div>
                    <div className="desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTourCards