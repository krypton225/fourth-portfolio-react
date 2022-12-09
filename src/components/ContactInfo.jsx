const ContactInfo = ({ contactIcon, contactAltText, title, firstText, secondText }) => {
    return (
        <div className="w-full lg:w-auto mb-12 flex justify-between items-start">
            <img src={contactIcon} alt={contactAltText} />

            <div className="w-full text-start ml-6 flex flex-col justify-between items-start">
                <p className="text-white">{title}</p>
                <p className="my-2 text-[#616161]">{firstText}</p>
                <p className="text-light-beige capitalize">{secondText}</p>
            </div>
        </div>
    )
}

export default ContactInfo;