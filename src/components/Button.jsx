const Button = ({ text, margin = "" }) => (
    <button className={`py-2 px-12 ${margin} rounded-lg text-lg text-white bg-dark-beige
             transition hover:bg-[#7d674c]`}>
        {text}
    </button>
);

export default Button;