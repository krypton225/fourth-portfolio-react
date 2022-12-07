import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import AllSkillsImages from "../data/skills-imgs";

const Skills = () => (
    <section className="w-screen relative py-5 px-5 text-center mx-auto flex justify-center items-center bg-[#1a1a1a]">
        {
            AllSkillsImages.map(({ id, imageSrc, imageAlt }) => (
                <div key={id} className="w-1/6 mx-auto flex flex-wrap justify-center items-center">
                    <LazyLoadImage effect='blur' threshold={150} src={imageSrc} alt={imageAlt} className="p-1 lg:p-4 cursor-pointer" draggable="false" />
                </div>
            ))
        }
    </section>
)

export default Skills;