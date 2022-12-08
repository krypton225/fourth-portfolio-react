import insert from "./generateIDs";

import { ImageProject1, ImageProject2, ImageProject3, ImageProject4, ImageProject5, ImageProject6 } from "./imgs-imports"

const projectsImages = [
    { imageSrc: ImageProject1, imageAlt: "Laptop, Phone and Camera", projectCategory: "Laptop, Phone and Camera" },
    { imageSrc: ImageProject2, imageAlt: "Phone", projectCategory: "Phone" },
    { imageSrc: ImageProject3, imageAlt: "Laptop", projectCategory: "Laptop" },
    { imageSrc: ImageProject4, imageAlt: "Phone with Laptop", projectCategory: "Phone with Laptop" },
    { imageSrc: ImageProject5, imageAlt: "Headphone", projectCategory: "Headphone" },
    { imageSrc: ImageProject6, imageAlt: "Watch", projectCategory: "Watch" },
];

(() => insert(projectsImages))();

export default projectsImages;