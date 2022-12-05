import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

import insert from "./generateIDs";

const socialMediaIcons = [
    { icon: <FaFacebookF />, urlIcon: "https://ar-ar.facebook.com/", titleIcon: "Facebook" },
    { icon: <BsTwitter />, urlIcon: "https://twitter.com/", titleIcon: "Twitter" },
    { icon: <BsInstagram />, urlIcon: "https://www.instagram.com/", titleIcon: "Instagram" },
    { icon: <FaWhatsapp />, urlIcon: "https://web.whatsapp.com/", titleIcon: "Whatsapp" },
    { icon: <FaTelegramPlane />, urlIcon: "https://web.telegram.org/", titleIcon: "Telegram" },
];

(() => insert(socialMediaIcons))();

export default socialMediaIcons;