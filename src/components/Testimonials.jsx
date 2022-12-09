import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import { Heading } from './index';

import AllTestimonialsData from "../data/testimonials-data";

const Testimonials = () => {
    const myBreakpointsSwiper = {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    }

    return (
        <section id="testimonials" className="py-40 px-4 md:px-8">
            <div className="container text-white text-center">
                <Heading textSentence={"what other people say"} />

                <Swiper spaceBetween={50} autoplay={true} loop={true} pagination={{ dynamicBullets: true }}
                    modules={[Pagination]} className="mySwiper mt-24" breakpoints={myBreakpointsSwiper}>
                    {
                        AllTestimonialsData.map(({ id, imagePerson, imageAltText, personName, personJob, personComment }) => (
                            <SwiperSlide key={id} className="mx-auto py-8 px-2 md:px-4 border-t-[3px] border-solid border-light-beige rounded-2xl select-none bg-[#1a1a1a] cursor-grab flex flex-col justify-center items-center">
                                <div className="w-[8rem] border-[3px] border-solid border-light-beige rounded-full p-1">
                                    <img src={imagePerson} alt={imageAltText} className="w-full h-full rounded-full" />
                                </div>

                                <p className='mt-4 capitalize'>{personName}</p>

                                <p className='my-4 capitalize text-light-beige'>{personJob}</p>

                                <p className='w-[95%] md:w-[97%] mx-auto mb-6 leading-7 text-center'>{personComment}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
};

export default Testimonials;