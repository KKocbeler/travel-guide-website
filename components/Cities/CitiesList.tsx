import React from 'react';
import '@/components/Cities/CitiesList.css';
import Link from 'next/link';

const CitiesList = () => {
  return (
    <div className='cities'>
        <div className="title">Cities</div>
        <div className="list">
            <Link href={'^3'}>
                <div className="item">
                    <div className="content">
                        <h3>Paris</h3>
                        <p>
                            Paris, the City of Light, is known for the Eiffel Tower, Louvre, art, fashion, and charming streets, blending elegance with history.
                        </p>
                    </div>
                </div>
            </Link>
            <Link href={'^3'}>
                <div className="item">
                    <div className="content">
                        <h3>Paris</h3>
                        <p>
                            Paris, the City of Light, is known for the Eiffel Tower, Louvre, art, fashion, and charming streets, blending elegance with history.
                        </p>
                    </div>
                </div>
            </Link>
            <Link href={'^3'}>
                <div className="item">
                    <div className="content">
                        <h3>Paris</h3>
                        <p>
                            Paris, the City of Light, is known for the Eiffel Tower, Louvre, art, fashion, and charming streets, blending elegance with history.
                        </p>
                    </div>
                </div>
            </Link>
            <Link href={'^3'}>
                <div className="item">
                    <div className="content">
                        <h3>Paris</h3>
                        <p>
                            Paris, the City of Light, is known for the Eiffel Tower, Louvre, art, fashion, and charming streets, blending elegance with history.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default CitiesList