import React from 'react';
import '@/components/Cities/City/CityHeader.css';

const CityHeader = () => {
  return (
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
  )
}

export default CityHeader