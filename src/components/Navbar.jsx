import { useState } from "react";

import Logo from "./Logo";

import NavbarItems from "../data/navbarItems";

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const handleClickToggleBtn = () => setToggleNavbar(prev => !prev);

    return (
        <>
            <header className={`w-full py-6 px-4 fixed top-0 left-0 z-[9999] bg-rich-black shadow-sm shadow-[#251e16]
                        ${toggleNavbar ? "shadow-none bg-transparent" : ""}`}>
                <nav className={`w-full container flex justify-between items-center text-white capitalize transition`}>
                    <h1 className={`text-2xl md:text-3xl font-[Caveat] ${toggleNavbar ? "invisible opacity-0" : "visible opacity-100"}`}>
                        <Logo />
                    </h1>

                    <ul className={`hidden lg:flex justify-between items-center space-x-7 text-lg tracking-wider ${toggleNavbar ? "hidden" : ""}`}>
                        {
                            NavbarItems.map(({ id, linkText, linkTo }) => (
                                <li key={id}>
                                    <a href={`#${linkTo}`} className="py-4 transition hover:text-light-beige">
                                        {linkText}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="w-[2rem] h-[1.4rem] p-[2px] absolute right-7 lg:right-10 top-[40%] z-[99999999] rounded flex flex-col justify-between lg:hidden cursor-pointer"
                        onClick={handleClickToggleBtn}>
                        <span className={`w-full h-[2px] block transition ${toggleNavbar ? "rotate-45 translate-y-2 bg-rich-black" : "rotate-0 bg-white"}`}></span>
                        <span className={`w-full h-[2px] block transition ${toggleNavbar ? "bg-transparent" : "bg-white"}`}></span>
                        <span className={`w-full h-[2px] block transition ${toggleNavbar ? "-rotate-45 -translate-y-2 bg-rich-black" : "rotate-0 bg-white"}`}></span>
                    </div>
                </nav>
            </header>

            <ul className={`w-screen h-screen absolute top-0 left-0 z-50 flex flex-col justify-center items-center
                            bg-light-beige capitalize text-center text-lg text-rich-black font-semibold tracking-wider transition-all
                            ${toggleNavbar ? "visible opacity-100" : "invisible opacity-0"}`}>
                {
                    NavbarItems.map(({ id, linkText, linkTo }) => (
                        <li key={id} className="block mt-8 text-center">
                            <a href={`#${linkTo}`} className="py-4 transition hover:text-dark-beige" onClick={() => setToggleNavbar(prev => !prev)}>
                                {linkText}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Navbar;