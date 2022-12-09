import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import AllSkillsImages from "../data/skills-imgs";

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="w-screen relative py-5 px-5 text-center mx-auto flex justify-center items-center bg-[#1a1a1a] overflow-hidden">
            {
                AllSkillsImages.map(({ id, imageSrc, imageAlt, dataAOS, dataAOSDuration, dataAOSDelay }) => (
                    <div key={id} className="w-1/6 mx-auto flex flex-wrap justify-center items-center"
                        data-aos={dataAOS} data-aos-easing="linear" data-aos-duration={dataAOSDuration} data-aos-delay={dataAOSDelay}>
                        <LazyLoadImage effect='blur' threshold={150} src={imageSrc} alt={imageAlt} className="p-1 lg:p-4 cursor-pointer" draggable="false" />
                    </div>
                ))
            }
        </section>
    )
}

export default Skills;