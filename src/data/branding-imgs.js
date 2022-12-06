import insert from "./generateIDs";

import { ImageBrandingBehance, ImageBrandingDribble, ImageBrandingUpwork, ImageBrandingFreelancer } from "./imgs-imports";

const brandingImages = [
    { imageSrc: ImageBrandingBehance, imageAlt: "Behance" },
    { imageSrc: ImageBrandingDribble, imageAlt: "Dribble" },
    { imageSrc: ImageBrandingUpwork, imageAlt: "Upwork" },
    { imageSrc: ImageBrandingFreelancer, imageAlt: "Freelancer" },
];

(() => insert(brandingImages))();

export default brandingImages;