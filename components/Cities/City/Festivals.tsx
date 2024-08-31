import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import '@/components/Cities/City/Festivals.css';

const Festivals = () => {
    const festivals = [
        {
          "name": "Fête de la Musique",
          "date": "June 21",
          "description": "A city-wide music festival where both amateur and professional musicians perform in the streets, parks, and public spaces of Paris. The festival celebrates the summer solstice.",
          "features": ["Free concerts", "Wide variety of music genres", "Outdoor performances"]
        },
        {
          "name": "Paris Fashion Week",
          "date": "Held twice a year (March and September)",
          "description": "One of the most prestigious fashion events in the world, featuring runway shows from leading fashion houses like Chanel, Dior, and Louis Vuitton.",
          "features": ["High-end fashion shows", "Celebrity attendance", "Exclusive parties"]
        },
        {
          "name": "Bastille Day",
          "date": "July 14",
          "description": "A national holiday in France, celebrating the French Revolution. Paris hosts a large military parade on the Champs-Élysées, along with fireworks and parties.",
          "features": ["Military parade", "Fireworks at the Eiffel Tower", "Public celebrations"]
        },
        {
          "name": "Nuit Blanche",
          "date": "First Saturday of October",
          "description": "An all-night arts festival where museums, galleries, and other cultural institutions stay open late, offering special events and exhibits.",
          "features": ["Late-night museum openings", "Art installations", "Public performances"]
        },
        {
          "name": "Paris Jazz Festival",
          "date": "Every weekend in July",
          "description": "A summer jazz festival held in the Parc Floral de Paris, featuring performances by jazz musicians from around the world.",
          "features": ["Outdoor concerts", "International jazz artists", "Scenic park setting"]
        },
        {
          "name": "Paris Christmas Markets",
          "date": "Late November to December",
          "description": "Traditional Christmas markets set up throughout the city, offering holiday decorations, gifts, and seasonal food and drink.",
          "features": ["Christmas decorations", "Artisan gifts", "Festive food and drink"]
        },
        {
          "name": "Paris Plages",
          "date": "July and August",
          "description": "A summer event where the banks of the Seine River are transformed into temporary beaches, complete with sand, palm trees, and activities.",
          "features": ["Artificial beaches", "Sunbathing spots", "Water sports"]
        },
        {
          "name": "Salon du Chocolat",
          "date": "Late October to early November",
          "description": "A five-day event dedicated to chocolate, featuring exhibits from top chocolatiers, demonstrations, tastings, and a chocolate fashion show.",
          "features": ["Chocolate exhibits", "Live demonstrations", "Chocolate fashion show"]
        }
    ]

    return (
        <div className="festivals">
            <div className="header-title">Festivals</div>
            <div className="fest-list">
                {
                    festivals.map((festival, index) => (
                        <div className="festival" key={index}>
                            <div className="title">{festival.name}</div>
                            <div className="description">{festival.description}</div>
                            <div className='features'>
                                <div className="title">Features</div>
                                <ul className='features-list'>
                                    {
                                        festival.features.map((item, index) => (
                                            <li key={index}><FontAwesomeIcon icon={faCheck} /> {item}</li>
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