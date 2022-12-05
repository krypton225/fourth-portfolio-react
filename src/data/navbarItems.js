import insert from "./generateIDs";

const navbarItems = [
    { linkText: "home", linkTo: "home" },
    { linkText: "about", linkTo: "about" },
    { linkText: "portfolio", linkTo: "portfolio" },
    { linkText: "services", linkTo: "services" },
    { linkText: "testimonials", linkTo: "testimonials" },
    { linkText: "contact", linkTo: "contact" }
];

(() => insert(navbarItems))();

export default navbarItems;