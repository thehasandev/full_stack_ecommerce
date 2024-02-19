import React from 'react'

import Slider from "react-slick";
import Contianer from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import SlideOne from "../../assets/slide1.png"
import SlideTwo from "../../assets/slide2.png"
import SlideThree from "../../assets/slide3.png"
import SlideFour from "../../assets/slide4.png"
import BannerTittle from "../../assets/banner_tittle.jpg"
import "slick-carousel/slick/slick.css";
import { IoSearchSharp } from "react-icons/io5";

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,

        appendDots: dots => (
            <div>
                <ul className='flex gap-x-5 absolute bottom-0 left-1/2 -translate-x-1/2 z-44'> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='btn p-2'>
                .
            </div>
        )

    };
    return (
        <section className='mb-4 mt-36'>
            <Contianer>
                <Flex className="justify-between">
                    <div className='w-[75%] '>
                        <Slider {...settings}>
                            <div>
                                <Image src={SlideOne} className="w-full" />
                            </div>
                            <div>
                                <Image src={SlideTwo} className="w-full" />
                            </div>
                            <div>
                                <Image src={SlideThree} className="w-full" />
                            </div>
                            <div>
                                <Image src={SlideFour} className="w-full" />
                            </div>
                        </Slider>

                    </div>

                    <div className='w-[23%]'>
                        <div className='py-6 px-4 bg-[#FFE8A1]'>
                            <h1 className='text-center font-roboto mb-1 font-medium text-primary text-lg'>Compare Products</h1>
                            <p className='text-center font-roboto mb-8 font-normal text-primary text-sm'>Choose Two Products to Compare</p>


                            <div className='relative'>
                                <input placeholder='Search Product' type="text" className='w-full px-4 py-2' />
                                <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-4' />
                            </div>

                            <div className='relative my-5'>
                                <input placeholder='Search Product' type="text" className='w-full px-4 py-2' />
                                <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-4' />
                            </div>

                            <Flex className="justify-center mt-2">
                                <button className='px-5 bg-[#1B2E83] text-white text-base rounded-[4px] font-roboto font-medium py-2'>View Comparison</button>
                            </Flex>
                        </div>
                        <Image src={BannerTittle} className="mt-8" />
                    </div>
                </Flex>
            </Contianer>

        </section>
    )
}

export default Banner