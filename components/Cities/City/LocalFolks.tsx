import React from 'react';
import '@/components/Cities/City/LocalFolks.css';

const LocalFolks = () => {
    const interviews = [
      {
          "id": 1,
          "avatar": "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
          "name": "Alex De Souza",
           "article": "When in Paris, always start your day with a croissant from a local bakery. The smaller, the better. It’s the freshest in the morning, and the experience is unmatched."
      },
      {
          "id": 2,
          "avatar": "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
          "name": "Marc Dupont",
          "article": "If you want to see the real Paris, explore the neighborhoods like Le Marais and Montmartre. These areas are full of character, history, and the best local cafés."
      },
      {
          "id": 3,
          "avatar": "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
          "name": "Sophie Martin",
          "article": "The best time to visit the Eiffel Tower is at night. The lights make it magical, and there are fewer tourists, so you can enjoy the view in peace."
      },
      {
          "id": 4,
          "avatar": "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
          "name": "Julien Lefevre",
          "article": "Take a walk along the Seine River in the evening. It’s a beautiful way to see Paris, and you’ll catch some of the best sunset views."
      },
      {
          "id": 5,
          "avatar": "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
          "name": "Claire Dubois",
          "article": "Visit the local markets like Marché d'Aligre. It's not only a great place to buy fresh produce, but also to experience the Parisian way of life."
      }
    ]
    
    return (
        <div className="local-folks">
            <div className="header-title">
            Voices of the Locals: Insider Tips and Stories
            </div>
            <div className="interviews">
                {
                    interviews.map((interview, index) => (
                        <div className={`interview ${interview.id === 3 ? 'grid-span-row-2' : interview.id % 2 === 1 ? 'grid-span-col-2' :  ''}`} key={index}>
                        <div className="header">
                            <div className="avatar">
                                <img src={interview.avatar} alt="" />
                            </div>
                            <div className="name">{interview.name}</div>
                            
                        </div>
                        <p className="body">
                            {interview.article}
                        </p>
                    </div>
                    ))    
                }
            </div>
        </div>
    )
}

export default LocalFolks