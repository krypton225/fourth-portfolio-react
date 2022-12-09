import insert from "./generateIDs";

import { ImageServicesBranding, ImageServicesDesign, ImageServicesDevelopment, ImageServicesSEO } from "./imgs-imports";

const servicesInfo = [
    {
        serviceIcon: ImageServicesBranding,
        serviceAltText: "branding icon",
        serviceTitle: "branding",
        serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi.",
        dataAOS: "zoom-in",
        dataAOSDuration: "500",
        delay: "50",
    },
    {
        serviceIcon: ImageServicesDesign,
        serviceAltText: "design  icon",
        serviceTitle: "design",
        serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi.",
        dataAOS: "zoom-in",
        dataAOSDuration: "500",
        delay: "200",
    },
    {
        serviceIcon: ImageServicesDevelopment,
        serviceAltText: "development icon",
        serviceTitle: "development",
        serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi.",
        dataAOS: "zoom-in",
        dataAOSDuration: "500",
        delay: "350",
    },
    {
        serviceIcon: ImageServicesSEO,
        serviceAltText: "SEO icon",
        serviceTitle: "SEO",
        serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi.",
        dataAOS: "zoom-in",
        dataAOSDuration: "500",
        delay: "500",
    },
];

(() => insert(servicesInfo))();

export default servicesInfo;