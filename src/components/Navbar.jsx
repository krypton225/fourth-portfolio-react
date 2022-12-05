import NavbarItems from "../data/navbarItems";

const Navbar = () => {
    return (
        <nav className="py-6 text-white flex justify-between items-center capitalize">
            <h1 className="text-2xl md:text-4xl font-[Caveat]">
                <a href="#" className="py-2 px-1 normal-case font-semibold tracking-wide">
                    <span className="capitalize text-light-beige">t</span>homas &nbsp;
                    <span className="capitalize text-light-beige">D</span>
                    <span>avid</span>
                </a>
            </h1>

            <ul className="flex justify-between items-center space-x-7 text-lg tracking-wider">
                {
                    NavbarItems.map(({ id, linkText, linkTo }) => (
                        <li key={id}>
                            <a href={linkTo} className="py-4 transition hover:text-light-beige">{linkText}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar;