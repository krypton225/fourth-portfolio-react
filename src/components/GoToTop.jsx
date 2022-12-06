import { useState } from "react";

import { Link } from "react-scroll";

import { IoIosArrowUp } from "react-icons/io";

const GoToTop = () => {
    const [isReachToPoint, setIsReachToPoint] = useState(false);

    const handleScrolling = () => (document.body.scrollTo > 120 || document.documentElement.scrollTop > 120) ?
        setIsReachToPoint(true) : setIsReachToPoint(false);

    window.addEventListener("scroll", handleScrolling);

    return (
        <Link to={`home`} smooth={true} offset={-100} duration={800} delay={100}
            className={`w-10 lg:w-12 h-10 lg:h-12 p-0 lg:p-1 rounded-full flex justify-center items-center fixed bottom-6 lg:bottom-8 right-2 z-[99999999999]
                    bg-light-beige text-rich-black text-lg lg:text-2xl cursor-pointer transition-all duration-300
                        ${isReachToPoint ? "right-6 lg:right-10 visible opacity-100" : "invisible opacity-0"}`}>
            <IoIosArrowUp />
        </Link>
    )
};

export default GoToTop;