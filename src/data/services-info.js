import insert from "./generateIDs";

import { ImageServicesBranding, ImageServicesDesign, ImageServicesDevelopment, ImageServicesSEO } from "./imgs-imports";

const servicesInfo = [
    {
        serviceIcon: ImageServicesBranding,
        serviceAltText: "branding icon",
        serviceTitle: "branding",
        serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi."
    },
    {
        serviceIcon: ImageServicesDesign,
        serviceAltText: "design  icon",
        serviceTitle: "design",
        serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi."
    },
    {
        serviceIcon: ImageServicesDevelopment,
        serviceAltText: "development icon",
        serviceTitle: "development",
        serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi."
    },
    {
        serviceIcon: ImageServicesSEO,
        serviceAltText: "SEO icon",
        serviceTitle: "SEO",
        serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi."
    },
];

(() => insert(servicesInfo))();

export default servicesInfo;