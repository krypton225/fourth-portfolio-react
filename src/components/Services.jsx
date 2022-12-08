import { Markup } from "interweave";

import { coloringFirstLetters } from "../functions/index";

import AllServicesInfo from "../data/services-info.js";

const Services = () => (
    <section id="services" className="py-40 px-2 md:px-8 bg-[#1a1a1a]">
        <div className="container text-center">
            <h4 className="text-white text-4xl lg:text-5xl font-[Caveat]">
                <Markup content={coloringFirstLetters("what I do for clients")} />
            </h4>

            <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-white text-sm lg:text-lg leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in numquam dolor libero explicabo, inventore aperiam, commodi et!
            </p>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-start">
                {
                    AllServicesInfo.map(({ id, serviceIcon, serviceAltText, serviceTitle, serviceDescription }) => (
                        <div key={id} className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer
                            transition duration-[1.2s] hover:bg-[#444]">
                            <div className="w-full mx-0 text-start">
                                <img src={serviceIcon} alt={serviceAltText} />
                            </div>

                            <div className="w-full mt-12 text-white">
                                <h4 className="text-2xl capitalize mb-4">{serviceTitle}</h4>
                                <p>{serviceDescription}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
);

export default Services;