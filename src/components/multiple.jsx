'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

function MultipleCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    return (
        <Carousel className='pb-24 md:w-full opacity-5' responsive={responsive} autoPlay={true} infinite={true} arrows={false}>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/1.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/2.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/3.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/4.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/5.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/6.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/7.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/8.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className='text-white'>
                <Image className=''
                    src={'/assets/images/9.jpg'}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>


        </Carousel>
    )
}

export default MultipleCarousel