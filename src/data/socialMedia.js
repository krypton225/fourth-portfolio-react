import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

import insert from "./generateIDs";

const socialMediaIcons = [
    { icon: <FaFacebookF /> },
    { icon: <BsTwitter /> },
    { icon: <BsInstagram /> },
    { icon: <FaWhatsapp /> },
    { icon: <FaTelegramPlane /> },
];

(() => insert(socialMediaIcons))();

export default socialMediaIcons;