"use client"
import React, { useContext, useEffect, useState } from 'react';
import '@/components/Gallery/GalleryPage.scss';
import { CityContext } from '@/context/CityContext';
import Loading from '../Pieces/Loading';

const GalleryPage = () => {
    const {cities, loading, error} = useContext(CityContext);
    const [gallery, setGallery] = useState<string[]>([]);
    const [visibleImages, setVisibleImages] = useState<string[]>([]);
    const [imagesToShow, setImagesToShow] = useState<number>(15);
    const [moreButton, setMoreButton] = useState<boolean>(true);

    useEffect(() => {
        const imagesCity: string[] = cities?.map(item => item.img).filter((img): img is string => Boolean(img)) || [];
        const imagesPlaces: string[] = cities?.flatMap(item => 
            item.placestogo 
                ? item.placestogo.map(thing => thing.img).filter((img): img is string => Boolean(img)) 
                : []
        ) || [];
        
        setGallery([...imagesCity, ...imagesPlaces]);
    }, [cities]);

    useEffect(() => {
        setVisibleImages([...gallery.slice(0, imagesToShow)])

    }, [gallery, imagesToShow])

    const handleLoadMore = () => {
        const newImageCount = (imagesToShow + 9);
        setImagesToShow(newImageCount);
        setVisibleImages(gallery.slice(0, newImageCount));

        if(newImageCount >= gallery.length) {
            setMoreButton(false)
        }
    }

    console.log(gallery);

    return (
        <div className='gallery-page'>
            <div className="title">Gallery</div>
            {loading ? (
                <Loading />
            ) : error ? (
                <p>Error</p>
            ) : (
                <>
                    <div className="gallery-images-list">
                        {visibleImages?.map((item, index:number) => (
                            <div className={`gallery-image ${(index % 6 === 0) ? 'grid-col-span-2' : (index % 3 === 0) ? 'grid-row-span-2' : ''}`} key={index}>
                                <img src={item} alt={`Gallery image ${index}`} />
                            </div>
                        ))}
                    </div>
                    {moreButton && (
                        <div className="more-button" onClick={handleLoadMore}>
                            More
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default GalleryPage;
