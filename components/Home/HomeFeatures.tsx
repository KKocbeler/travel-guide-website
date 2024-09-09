import React from 'react';
import '@/components/Home/HomeFeatures.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGem, faMapSigns, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface FeaturesProps {
    icon: IconDefinition,
    title: string,
    article: string,
}

const HomeFeatures:React.FC<FeaturesProps> = () => {

    const features: FeaturesProps[] = [
        {
            icon: faMapSigns, 
            title: 'Discover Iconic Cities', 
            article: 'Explore the history and culture of Europe\'s most famous cities, from Rome\'s ancient ruins to Paris\' charming streets.'
        },
        {
            icon: faCalendarAlt, 
            title: 'Festivals & Events', 
            article: 'Stay updated on local festivals and events, from Oktoberfest in Munich to the Venice Carnival, and enjoy Europe\'s vibrant cultural scene.'
        },
        {
            icon: faGem, 
            title: 'Local Cuisine Highlights', 
            article: 'Experience Europe\'s culinary delights, from Italian pasta to French pastries, and discover must-try local dishes.'
        },
        {
            icon: faSearch, 
            title: 'Insider Travel Tips', 
            article: 'Get tips on the best places to visit, when to go, and how to experience cities like a local. Find hidden gems and avoid tourist traps.'
        }
    ]
  return (
    <div className='home-features container'>
        <h3>OdysseyJourneys Features</h3>
        <div className="features-section">
            {
                features.map((item, index: number) => (
                    <div className="section" key={index}>
                        <div className="section-icon">
                            <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.article}</p>
                    </div>   
                ))
            }
        </div>
    </div>
  )
}

export default HomeFeatures