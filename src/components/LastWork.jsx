import { Markup } from "interweave";

import { coloringFirstLetters } from "../functions/index";

import AllProjectsImages from "../data/projects-imgs.js";

const LastWork = () => {
    return (
        <section id="portfolio">
            <div className="container py-36 px-8 text-center">
                <h4 className="text-white text-5xl font-[Caveat]">
                    <Markup content={coloringFirstLetters("my last work")} />
                </h4>

                <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-white text-sm lg:text-lg leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in numquam dolor libero explicabo, inventore aperiam, commodi et! Quia iste tempora aut, illum culpa ipsum possimus saepe eligendi.
                </p>

                <div className="w-full mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
                    {
                        AllProjectsImages.map(({ id, imageSrc, imageAlt, projectCategory }) => (
                            <div key={id}>
                                <div className="w-full rounded-3xl overflow-hidden group transition-all duration-[0.9s]">
                                    <img src={imageSrc} alt={imageAlt} draggable="false" className="w-full rounded-3xl transition-all duration-[0.9s] group-hover:scale-110 group-hover:-rotate-[5deg]" />
                                </div>
                                <p className="mt-6 text-xl text-light-beige">{projectCategory}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default LastWork;