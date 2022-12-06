import insert from "./generateIDs";

import {
    ImageSkillsHTML5,
    ImageSkillsCSS3,
    ImageSkillsJavaScript,
    ImageSkillsGit,
    ImageSkillsFigma,
    ImageSkillsReactJS,
    ImageSkillsNodeJS,
    ImageSkillsNextJS,
} from "./imgs-imports";

const skillsImages = [
    { imageSrc: ImageSkillsHTML5, imageAlt: "HTML5" },
    { imageSrc: ImageSkillsCSS3, imageAlt: "CSS3" },
    { imageSrc: ImageSkillsJavaScript, imageAlt: "JavaScript" },
    { imageSrc: ImageSkillsGit, imageAlt: "Git" },
    { imageSrc: ImageSkillsFigma, imageAlt: "Figma" },
    { imageSrc: ImageSkillsReactJS, imageAlt: "React JS" },
    { imageSrc: ImageSkillsNodeJS, imageAlt: "Node JS" },
    { imageSrc: ImageSkillsNextJS, imageAlt: "NextJS" },
];

(() => insert(skillsImages))();

export default skillsImages;