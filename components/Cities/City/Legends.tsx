"use client"
import React, { useState } from 'react';
import '@/components/Cities/City/Legends.css';

const Legends = () => {
    const [showStory, setShowStory] = useState(false);

    return (
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
    )
}

export default Legends