import AllBrandingImages from "../data/branding-imgs";

const Branding = () => (
    <section className="relative w-screen mt-5 py-1 px-5 text-center mx-auto flex justify-center items-center bg-[#1a1a1a]">
        {
            AllBrandingImages.map(({ id, imageSrc, imageAlt }) => (
                <div key={id} className="w-3/4 lg:w-1/2 mx-auto flex justify-center items-center">
                    <img src={imageSrc} alt={imageAlt} className="p-1 lg:p-4 cursor-pointer" draggable="false" />
                </div>
            ))
        }
    </section>
);

export default Branding;