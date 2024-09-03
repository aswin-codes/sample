import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SideIcon from './SideIcon';

const RightPart2 = () => {
    const [images, setImages] = useState([]);
    
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages(prevImages => [...prevImages, ...newImages]);
    };

    return (
        <div className='flex-1 flex-col flex items-center'>
            <div className='flex-1 bg-prim3 w-full rounded-2xl drop-shadow-cus flex gap-2 py-4 px-3 mb-4'>
                <SideIcon />
                <div className='flex-col flex-1'>
                    <div className='flex mr-5 justify-between items-center mb-2'>
                        <div className='bg-prim4 text-white text-xs sm:text-base rounded-xl px-6 py-3 cursor-pointer'>
                            Gallery
                        </div>
                        <div className='flex size-fit items-center gap-3 '>
                            <input 
                                type="file" 
                                accept="image/*" 
                                multiple 
                                onChange={handleImageUpload} 
                                className='hidden'
                                id='image-upload'
                            />
                            <label 
                                htmlFor='image-upload' 
                                className='bg-white bg-opacity-5 w-fit h-fit px-4 py-2 rounded-full shadow-cus2 cursor-pointer'
                            >
                                <p className='flex items-center gap-1 text-xs text-white'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </span>
                                    <span>ADD IMAGE</span>
                                </p>
                            </label>
                            <button className='bg-red-50 rounded-full h-fit p-2 text-prim6 bg-gradient-to-br from-prim7 to-prim4 shadow-cus1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <button className='bg-red-50 rounded-full h-fit p-2 text-prim6 bg-gradient-to-br from-prim7 to-prim4 shadow-cus1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        infiniteLoop
                        autoPlay
                        swipeable
                        emulateTouch
                        dynamicHeight
                        centerMode
                        centerSlidePercentage={33.33}
                    >
                        {images.map((image, index) => (
                            <div className='h-40  mx-3' key={index}>
                                <img src={image} className='size-40 rounded-3xl object-cover' alt={`Carousel image ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className='h-1 w-5/6 rounded bg-prim3 drop-shadow-cus mb-2'></div>
        </div>
    );
};

export default RightPart2;
