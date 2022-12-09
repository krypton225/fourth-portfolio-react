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
    { imageSrc: ImageSkillsHTML5, imageAlt: "HTML5", dataAOS: "zoom-out", dataAOSDuration: "500", dataAOSDelay: "150" },
    { imageSrc: ImageSkillsCSS3, imageAlt: "CSS3", dataAOS: "zoom-out", dataAOSDuration: "500", dataAOSDelay: "300" },
    { imageSrc: ImageSkillsJavaScript, imageAlt: "JavaScript", dataAOS: "zoom-out", dataAOSDuration: "500", dataAOSDelay: "450" },
    { imageSrc: ImageSkillsGit, imageAlt: "Git", dataAOS: "zoom-out", dataAOSDuration: "500", dataAOSDelay: "600" },
    { imageSrc: ImageSkillsFigma, imageAlt: "Figma", dataAOS: "zoom-out", dataAOSDuration: "500", dataAOSDelay: "750" },
    { imageSrc: ImageSkillsReactJS, imageAlt: "React JS", dataAOS: "zoom-out", dataAOSDuration: "500", dataAOSDelay: "900" },
    { imageSrc: ImageSkillsNodeJS, imageAlt: "Node JS", dataAOS: "zoom-out", dataAOSDuration: "500", dataAOSDelay: "1050" },
    { imageSrc: ImageSkillsNextJS, imageAlt: "NextJS", dataAOS: "zoom-out", dataAOSDuration: "500", dataAOSDelay: "1200" },
];

(() => insert(skillsImages))();

export default skillsImages;