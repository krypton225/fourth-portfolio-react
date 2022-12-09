import { Heading } from "./index";

import { Button, Input } from "./index";

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
                            <div key={id} className="w-full lg:w-auto mb-12 flex justify-between items-start">
                                <img src={contactIcon} alt={contactAltText} />

                                <div className="w-full text-start ml-6 flex flex-col justify-between items-start">
                                    <p className="text-white">{title}</p>
                                    <p className="my-2 text-[#616161]">{firstText}</p>
                                    <p className="text-light-beige capitalize">{secondText}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <form className="w-full mt-4 lg:mt-0 lg:w-[50%] flex flex-col justify-center items-start">
                    <div className="w-full grid grid-col-1 lg:grid-col-2 gap-0">
                        <Input inputName="name" inputID="name" inputPlaceHolder="your name" additionStyle={"mt-0"} />
                        <Input inputName="email" inputID="email" inputPlaceHolder="your email" />
                    </div>

                    <div className="w-full">
                        <Input inputName="subject" inputID="subject" inputPlaceHolder="subject" />
                        <Input isInput={false} inputName="msg" inputID="msg" inputPlaceHolder="your message" additionStyle={"min-h-[14rem]"} />
                    </div>

                    <Button text="send message" hyperRef="home" additionStyle="w-full md:w-auto capitalize mt-4" />
                </form>
            </div>
        </div>
    </section>
);

export default Contact;