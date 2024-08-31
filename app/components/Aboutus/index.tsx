"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Tecurity is an AI-driven startup working to revolutionize the Fintech and open banking industry with AI-predictive prowess and innovative ideas serving the critical tier of financial institutions. We run on two principles of innovation and cutting-edge technology as the base of our product.',
        link: 'Learn more'
    }
]

const Aboutus = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16 gap-x-16 lg:gap-x-32'>
                    <div className={`bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group ${isExpanded ? 'hover:bg-blue' : 'hover:bg-blue'}`}>
                        <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>{Aboutdata[0].heading}</h4>
                        <Image src={Aboutdata[0].imgSrc} alt={Aboutdata[0].imgSrc} width={100} height={100} className="mb-5" />
                        <h4 className={`text-lg font-normal text-black ${isExpanded ? 'group-hover:text-offwhite' : ''} mb-5`}>
                            {isExpanded ? Aboutdata[0].paragraph : Aboutdata[0].paragraph.split(' ').slice(0, 20).join(' ') + '...'}
                        </h4>
                        <button onClick={handleToggle} className='text-lg font-semibold group-hover:text-black text-blue hover-underline'>
                            {isExpanded ? 'Show less' : Aboutdata[0].link}
                            <ChevronRightIcon width={20} height={20} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                    </div>
                    <div className='mt-16'>
                        <video
                            src="/videos/Aboutus/PN.mp4"
                            controls
                            className="w-[550px] h-[350px] rounded-lg shadow-lg mt-1 object-cover m-3" // Adjust the height and ensure the video covers the container
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
