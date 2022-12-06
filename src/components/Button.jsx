const Button = ({ text, margin = "", hyperRef }) => (
    <a href={`#${hyperRef}`} className={`py-2 px-12 ${margin} rounded-lg text-lg text-white bg-dark-beige transition hover:bg-[#7d674c]`}>
        {text}
    </a>
);

export default Button;