import SocialIcons from "../data/socialMedia";

const SocialMedia = () => (
    <div className="w-[75%] sm:w-[55%] lg:w-[35%] px-6 py-1 sm:py-2 absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2
                flex justify-between items-center rounded-3xl bg-light-beige text-rich-black text-2xl">
        {
            SocialIcons.map(({ id, icon, urlIcon, titleIcon }) => (
                <a className="w-9 h-9 p-2 rounded-full relative inline-flex justify-center items-center cursor-pointer"
                    href={urlIcon} key={id} title={titleIcon}>{icon}</a>
            ))
        }
    </div>
);

export default SocialMedia;