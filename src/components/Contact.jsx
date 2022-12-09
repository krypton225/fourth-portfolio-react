import { Heading, ContactInfo, ContactForm } from "./index";

import AllContactData from "../data/contact-data";

const Contact = () => (
    <section id="contact" className="py-40 px-2 md:px-8 bg-[#1a1a1a]">
        <div className="container text-center">
            <Heading textSentence={"contact me"} />

            <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-white text-sm lg:text-lg leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in numquam dolor libero explicabo, inventore aperiam.
            </p>

            <div className="mt-24 flex flex-col lg:flex-row justify-evenly items-start">
                <div className="flex flex-col justify-center items-start text-center">
                    {
                        AllContactData.map(({ id, contactIcon, contactAltText, title, firstText, secondText }) => (
                            <ContactInfo key={id} contactIcon={contactIcon} contactAltText={contactAltText} title={title}
                                firstText={firstText} secondText={secondText} />
                        ))
                    }
                </div>

                <ContactForm />
            </div>
        </div>
    </section>
);

export default Contact;