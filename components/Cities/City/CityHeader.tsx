"use client"
import React, { useState } from 'react';
import '@/components/Cities/City/CityHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CityHeader = () => {
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

  const [showStory, setShowStory] = useState(false);


  return (
    <>
    <div className='city-header'>
        <div className="city-title">
            PARIS
        </div>
        <p className="city-history">
            Paris, often referred to as "The City of Light," has a rich and storied history that dates back over 2,000 years.
            Founded in the 3rd century BC by a Celtic people known as the Parisii, the city began as a small fishing village on the banks of the Seine River.
            It became an important center of commerce and culture during the Roman Empire, known then as Lutetia.
            Over the centuries, Paris grew in size and influence, particularly during the Middle Ages when it became the political and economic heart of France.
            The city played a crucial role in the French Revolution in 1789, which led to the end of the monarchy and the rise of the French Republic.
            Throughout the 19th and 20th centuries, Paris evolved into a global center for art, fashion, and philosophy, becoming a hub for artists and intellectuals.
            Today, Paris is celebrated for its iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum,
            and it remains one of the most visited cities in the world, known for its rich cultural heritage and vibrant history.
        </p>
    </div>
    <div className="place-to-go">
        <div className="header-title">Place to go</div>
        <div className="places">
        <div className="place">
                <div className="image">
                    <img src={'/img/city/places/eiffel-tower.webp'} alt="ss" />
                </div>
                <div className="card-body">
                    <div className="title">Eiffel Tower</div>
                    <p className="description">
                        The Eiffel Tower is an iconic iron structure in Paris, France, built by Gustave Eiffel for the 1889 World's Fair.
                        Standing 330 meters tall, it was the tallest structure in the world at the time. Originally controversial,
                        it has become a symbol of France and a major tourist attraction, offering panoramic views of the city.
                    </p>
                </div>
            </div>
            <div className="place">
                <div className="image">
                    <img src={'/img/city/places/eiffel-tower.webp'} alt="ss" />
                </div>
                <div className="card-body">
                    <div className="title">Eiffel Tower</div>
                    <p className="description">
                        The Eiffel Tower is an iconic iron structure in Paris, France, built by Gustave Eiffel for the 1889 World's Fair.
                        Standing 330 meters tall, it was the tallest structure in the world at the time. Originally controversial,
                        it has become a symbol of France and a major tourist attraction, offering panoramic views of the city.
                    </p>
                </div>
            </div>
            <div className="place">
                <div className="image">
                    <img src={'/img/city/places/eiffel-tower.webp'} alt="ss" />
                </div>
                <div className="card-body">
                    <div className="title">Eiffel Tower</div>
                    <p className="description">
                        The Eiffel Tower is an iconic iron structure in Paris, France, built by Gustave Eiffel for the 1889 World's Fair.
                        Standing 330 meters tall, it was the tallest structure in the world at the time. Originally controversial,
                        it has become a symbol of France and a major tourist attraction, offering panoramic views of the city.
                    </p>
                </div>
            </div>
            <div className="place">
                <div className="image">
                    <img src={'/img/city/places/eiffel-tower.webp'} alt="ss" />
                </div>
                <div className="card-body">
                    <div className="title">Eiffel Tower</div>
                    <p className="description">
                        The Eiffel Tower is an iconic iron structure in Paris, France, built by Gustave Eiffel for the 1889 World's Fair.
                        Standing 330 meters tall, it was the tallest structure in the world at the time. Originally controversial,
                        it has become a symbol of France and a major tourist attraction, offering panoramic views of the city.
                    </p>
                </div>
            </div>
        </div>
    </div>
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
    <div className="local-cuisine">
        <div className="header-title">Local Cuisine</div>
        <div className="food-list">
            <div className="food">
                <div className="title">Croissant</div>
                <div className="image">
                    <img src="https://assets.zuckerjagdwurst.com/u4q97pkqszcdxj62j8adg1z9xdpz/1200/640/75/true/center/undefined.jpg?animated=undefined" alt="Croissant" />
                </div>
            </div>
            <div className="food">
                <div className="title">Croissant</div>
                <div className="image">
                    <img src="https://assets.zuckerjagdwurst.com/u4q97pkqszcdxj62j8adg1z9xdpz/1200/640/75/true/center/undefined.jpg?animated=undefined" alt="Croissant" />
                </div>
            </div>
            <div className="food">
                <div className="title">Croissant</div>
                <div className="image">
                    <img src="https://assets.zuckerjagdwurst.com/u4q97pkqszcdxj62j8adg1z9xdpz/1200/640/75/true/center/undefined.jpg?animated=undefined" alt="Croissant" />
                </div>
            </div>
            <div className="food">
                <div className="title">Croissant</div>
                <div className="image">
                    <img src="https://assets.zuckerjagdwurst.com/u4q97pkqszcdxj62j8adg1z9xdpz/1200/640/75/true/center/undefined.jpg?animated=undefined" alt="Croissant" />
                </div>
            </div>
            <div className="food">
                <div className="title">Croissant</div>
                <div className="image">
                    <img src="https://assets.zuckerjagdwurst.com/u4q97pkqszcdxj62j8adg1z9xdpz/1200/640/75/true/center/undefined.jpg?animated=undefined" alt="Croissant" />
                </div>
            </div>
        </div>
    </div>
    <div className="local-folks">
        <div className="header-title">
         Voices of the Locals: Insider Tips and Stories
        </div>
        <div className="interviews">
            <div className="interview grid-span-col-2">
                <div className="header">
                    <div className="avatar">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                    </div>
                    <div className="name">Alex De Souza</div>
                    
                </div>
                <p className="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, pariatur.
                </p>
            </div>
            <div className="interview">
                <div className="header">
                    <div className="avatar">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                    </div>
                    <div className="name">Alex De Souza</div>
                    
                </div>
                <p className="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, pariatur.
                </p>
            </div>
            <div className="interview grid-span-row-2">
                <div className="header">
                    <div className="avatar">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                    </div>
                    <div className="name">Alex De Souza</div>
                    
                </div>
                <p className="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, pariatur.
                </p>
            </div>
            <div className="interview">
                <div className="header">
                    <div className="avatar">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                    </div>
                    <div className="name">Alex De Souza</div>
                    
                </div>
                <p className="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, pariatur.
                </p>
            </div>
            <div className="interview grid-span-col-2">
                <div className="header">
                    <div className="avatar">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                    </div>
                    <div className="name">Alex De Souza</div>
                    
                </div>
                <p className="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, pariatur.
                </p>
            </div>
        </div>
    </div>
    <div className="legends">
        <div className='myth'>
            <div className="title">The Legends of The Golden Rose</div>
            <p className={`story ${showStory ? 'show'  : ''}`} onClick={() => setShowStory(!showStory)}>
                <span>O</span>nce upon a time, in a small village nestled in the heart of a vast kingdom, there lived a young girl named Elena.
                She was known far and wide for her kindness and beauty, but what made her truly special was the purity of her heart.
                Her mother had passed away when she was just a child, leaving her in the care of her father, a poor but honorable man who worked as a blacksmith.
                <br />
                <br />
                Every morning, Elena would wake before dawn to tend to the garden her mother had loved so dearly. The garden was filled with flowers of every color,
                but the most cherished of all was a single rose bush that had been her mother’s favorite. It was said that this rose bush was magical, for it had
                bloomed every year since Elena's mother had planted it, never failing to produce the most beautiful and fragrant roses.
                <br />
                As Elena grew older, a terrible sickness spread through the kingdom. Many people were afflicted, including Elena's father, who grew weaker by the day.
                Despite her efforts to care for him, nothing seemed to help. The local healer told Elena that only one thing could cure her father: the legendary Golden Rose,
                a mystical flower said to grow in the enchanted garden of a faraway kingdom.
                <br />
                Determined to save her father, Elena set out on a perilous journey to find the Golden Rose. She traveled through dark forests,
                crossed treacherous rivers, and climbed towering mountains, facing countless dangers along the way. But her love for her father and her unwavering belief in
                the goodness of the world kept her going.
                <br />
                After many weeks, Elena finally reached the enchanted garden. It was a place of breathtaking beauty, filled with flowers that shimmered like jewels and trees
                that whispered secrets in the wind. In the center of the garden stood the Golden Rose, its petals glowing with a light that seemed to come from the heavens.
                <br />
                As Elena approached the rose, a guardian appeared—a majestic, ethereal being with eyes like stars. The guardian told Elena that the Golden Rose was a sacred gift,
                one that could only be taken by someone with a heart as pure as gold. Without hesitation, Elena reached out to the rose, and to her amazement, it came willingly into her hands.
                <br />
                The guardian smiled and told Elena that her love and bravery had proven her worthy. The Golden Rose, now hers, would cure her father and bring prosperity to her village.
                With tears of gratitude, Elena thanked the guardian and began her journey home.
                <br />
                When she returned to her village, Elena found her father on the brink of death. She placed the Golden Rose in his hands, and as its light enveloped him,
                his strength returned, and his illness vanished. Word of the miracle spread quickly, and the village, once plagued by despair, flourished with new hope.
                <br />
                Elena's act of selfless love had not only saved her father but had also brought a lasting blessing to her people. The Golden Rose, now planted in their 
                village, continued to bloom year after year, its magic ensuring that no one in the village ever fell ill again.
                <br />
                And so, Elena's story became a legend, a tale of courage, love, and the power of a pure heart—a reminder that the most valuable treasures 
                are not those made of gold, but those found in the love we have for others.
            </p>
        </div>
    </div>
    </>
  )
}

export default CityHeader