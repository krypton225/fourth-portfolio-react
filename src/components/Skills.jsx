import AllSkillsImages from "../data/skills-imgs";

const Skills = () => (
    <section className="w-screen relative py-5 px-5 text-center mx-auto flex justify-center items-center bg-[#1a1a1a]">
        {
            AllSkillsImages.map(({ id, imageSrc, imageAlt }) => (
                <div key={id} className="w-1/6 mx-auto flex flex-wrap justify-center items-center">
                    <img src={imageSrc} alt={imageAlt} className="p-1 lg:p-4 cursor-pointer" draggable="false" />
                </div>
            ))
        }
    </section>
)

export default Skills;