import { Heading } from "./index";

import { ImageMan1 } from "../data/imgs-imports";

import { Button, SocialMedia } from "./index";

const Landing = () => {
    return (
        <section className="w-full h-[calc(100vh-10px)] relative mt-10 lg:mt-12 container flex flex-col justify-center items-center text-center mx-auto overflow-hidden scroll-0" id="home">
            <div className="w-full lg:w-[66%]">
                <h3 className="text-white text-[2rem] lg:text-3xl">Hey! I'm <span className="text-light-beige">Thomas David</span></h3>

                <Heading textSentence={"I'm a front end web developer"} additionStyles={"mt-2 lg:mt-4"} caveatFont={false} />

                <p className="mt-5 lg:mt-9 mb-8 text-lg text-white">
                    I can build user interface for web sites and applications with <span className="text-light-beige">React JS</span> and <span className="text-light-beige">Angular</span><br />
                    I love the front end development.
                </p>

                <Button text={"Hire Me"} margin="mt-4" />
            </div>

            <div className="w-[22rem] rounded-full">
                <img src={ImageMan1} alt="Man in landing page!" className="w-full rounded-full" draggable="false" />
            </div>

            <SocialMedia />
        </section>
    )
}

export default Landing;