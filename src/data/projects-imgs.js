import insert from "./generateIDs";

import { ImageProject1, ImageProject2, ImageProject3, ImageProject4, ImageProject5, ImageProject6 } from "./imgs-imports"

const projectsImages = [
    {
        imageSrc: ImageProject1,
        imageAlt: "Laptop, Phone and Camera",
        projectCategory: "Laptop, Phone and Camera",
        dataAOS: "zoom-in",
        dataAOSDuration: "800",
        dataAOSDelay: "150"
    },
    {
        imageSrc: ImageProject2, imageAlt: "Phone", projectCategory: "Phone",
        dataAOS: "zoom-in",
        dataAOSDuration: "800",
        dataAOSDelay: "150"
    },
    {
        imageSrc: ImageProject3, imageAlt: "Laptop", projectCategory: "Laptop",
        dataAOS: "zoom-in",
        dataAOSDuration: "800",
        dataAOSDelay: "150"
    },
    {
        imageSrc: ImageProject4, imageAlt: "Phone with Laptop", projectCategory: "Phone with Laptop",
        dataAOS: "zoom-in",
        dataAOSDuration: "800",
        dataAOSDelay: "150"
    },
    {
        imageSrc: ImageProject5, imageAlt: "Headphone", projectCategory: "Headphone",
        dataAOS: "zoom-in",
        dataAOSDuration: "800",
        dataAOSDelay: "150"
    },
    {
        imageSrc: ImageProject6, imageAlt: "Watch", projectCategory: "Watch",
        dataAOS: "zoom-in",
        dataAOSDuration: "800",
        dataAOSDelay: "150"
    },
];

(() => insert(projectsImages))();

export default projectsImages;