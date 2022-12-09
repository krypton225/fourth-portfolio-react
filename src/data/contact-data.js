import insert from "./generateIDs";

import { ImageContactEmail, ImageContactLocation } from "./imgs-imports";

const contactData = [
    {
        contactIcon: ImageContactEmail,
        contactAltText: "Email",
        title: "Have a question?",
        firstText: "I am here to help you",
        secondText: "Email me at thomas.david@mail.com"
    },
    {
        contactIcon: ImageContactLocation,
        contactAltText: "Location",
        title: "Current Location",
        firstText: "Mansoura, Egypt",
        secondText: "serving clients worldwide"
    },
];

(() => insert(contactData))();

export default contactData;