const Button = ({ text, margin = "", hyperRef = "", additionStyle = "" }) => (
    <a href={`#${hyperRef}`}
        className={`py-[0.66rem] px-12 ${margin} rounded-lg text-[0.98rem] lg:text-lg text-white bg-dark-beige transition hover:bg-[#7d674c] ${additionStyle}`}>
        {text}
    </a>
);

export default Button;