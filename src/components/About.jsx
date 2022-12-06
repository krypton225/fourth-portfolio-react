import { ImageMan2 } from "data/imgs-imports";

import { Button } from "./index";

const About = () => (
    <section id="about" className="relative w-screen py-32 bg-[#222]">
        <div className="container grid place-content-center grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 items-start">
            <div className="w-full h-full px-4 text-center lg:text-start relative flex flex-col justify-center">
                <h4 className="text-white text-5xl font-[Caveat]">Thomas David</h4>

                <p className="mt-2 mb-6 text-light-beige text-center lg:text-start text-3xl capitalize font-[Caveat]">freelance web developer</p>

                <p className="text-white text-lg leading-7">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem deleniti facilis tempora commodi dolores debitis repellendus excepturi nisi? Quisquam suscipit iste facere molestiae saepe voluptates.
                </p>

                <div className="w-full mx-auto flex justify-center lg:justify-start items-center">
                    <Button hyperRef={"contact"} text={"Contact Me"} margin={"mt-8"} />
                </div>
            </div>

            <div className="w-[70%] lg:w-[60%] mx-auto rounded-full flex justify-center items-center">
                <img src={ImageMan2} alt="Man" className="w-full rounded-full object-cover" draggable="false" />
            </div>
        </div>
    </section>
)

export default About;