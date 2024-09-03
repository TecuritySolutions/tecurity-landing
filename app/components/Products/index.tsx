"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface DataType {
    heading: string;
    paragraph: string;
    link: string;
}

const ProductData: DataType[] = [
    {
        heading: "Meet Tecurity AI",
        paragraph: 'Tecurity AI applies advancements in Artificial intelligence derived from genomics and large data sets to provide lenders with a Non-linear, Dynamic model of credit risk prediction which radically outperforms traditional lending methods worldwide. With Tecurity AI banks and NBFCs can leverage our model to accurately calculate credit risk and NPA prediction within microseconds to increase their lending performance and reduce their Non Performing Assets value which eventually increases the profit of the organization without the hassle of building model or capital investment.',
        link: 'Learn more'
    },
    {
        heading: "Meet eDNA",
        paragraph: 'eDNA stands for electronic DNA, an AI algorithm from Tecurity for credit card fraud prevention and protection that works as a DNA test for distinguishing legitimate transactions from fraud and preventing your credit score and money.',
        link: 'Learn more'
    },
]

const Product = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div id="product-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />

                {/* Centered Heading */}
                <div className="text-center mb-16">
                    <h3 className='text-blue text-lg tracking-widest'>OUR PRODUCTS</h3>
                    <h4 className='text-4xl lg:text-65xl font-bold'>Discover our products.</h4>
                </div>

                {/* First Section: Image and Tecurity AI Card */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-16 mt-9 gap-8">
                    <div className="w-full lg:w-1/2">
                        <h4 className='text-center text-xl lg:text-3xl font-bold mt-2 ml-3'>Loan Application Prediction</h4>
                        <video
                            src="/videos/Products/NPA-1.mp4"
                            controls
                            width="100%"
                            height="auto"
                            className="rounded-lg shadow-lg mt-8"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className={`bg-white rounded-3xl pt-10 pl-8 pb-10 pr-6 shadow-xl group transition-all duration-300 ${expandedIndex === 0 ? 'hover:bg-lightblue' : 'hover:bg-navyblue'}`}>
                            <h4 className={`text-4xl font-semibold mb-5 ${expandedIndex === 0 ? 'text-black' : 'text-black group-hover:text-white'}`}>
                                {ProductData[0].heading}
                            </h4>
                            <h4 className={`text-lg font-normal mb-5 ${expandedIndex === 0 ? 'text-black' : 'text-black group-hover:text-white'}`}>
                                {expandedIndex === 0 ? ProductData[0].paragraph : `${ProductData[0].paragraph.substring(0, 100)}...`}
                            </h4>
                            
                            {/* Additional Line and Button for Tecurity AI Card */}
                            {expandedIndex === 0 && (
                                <div className="mt-5">
                                    <p className='text-black text-bold text-xl'>Click the button below for a sample PDF.</p>
                                    <a href="/sample-loan-application-report.pdf" download="Sample Loan Application Report">
                                        <button className="mt-3 bg-blue text-white py-2 px-4 rounded-lg hover:bg-navyblue transition-colors">
                                            Download Report
                                        </button>
                                    </a>
                                </div>
                            )}
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleExpand(0); }} className='text-lg font-semibold group-hover:text-blue text-blue hover-underline mt-3'>
                                {expandedIndex === 0 ? 'Show less' : 'Learn more'}
                                <ChevronRightIcon width={20} height={20} />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Second Section: Video and eDNA Card */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-16 mt-9 gap-8">
                    <div className="w-full lg:w-1/2">
                        <h4 className='text-center text-xl lg:text-3xl font-bold mb-3 ml-2'>Credit Card Fraud Prevention</h4>
                        <video
                            src="/videos/Products/CCFD.mp4"
                            controls
                            width="100%"
                            height="auto"
                            className="rounded-lg shadow-lg mt-4"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className={`bg-white rounded-3xl pt-10 pl-8 pb-10 pr-6 shadow-xl group transition-all duration-300 ${expandedIndex === 1 ? 'hover:bg-lightblue' : 'hover:bg-navyblue'}`}>
                            <h4 className={`text-4xl font-semibold mb-5 ${expandedIndex === 1 ? 'text-black' : 'text-black group-hover:text-white'}`}>
                                {ProductData[1].heading}
                            </h4>
                            <h4 className={`text-lg font-normal mb-5 ${expandedIndex === 1 ? 'text-black' : 'text-black group-hover:text-white'}`}>
                                {expandedIndex === 1 ? ProductData[1].paragraph : `${ProductData[1].paragraph.substring(0, 100)}...`}
                            </h4>
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleExpand(1); }} className='text-lg font-semibold group-hover:text-blue text-blue hover-underline'>
                                {expandedIndex === 1 ? 'Show less' : 'Learn more'}
                                <ChevronRightIcon width={20} height={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
