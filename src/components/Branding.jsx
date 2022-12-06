import AllBrandingImages from "../data/branding-imgs";

const Branding = () => (
    <section className="relative w-screen mt-5 py-1 px-5 text-center mx-auto flex justify-center items-center bg-[#1a1a1a]">
        {
            console.log(AllBrandingImages)
        }
        {
            AllBrandingImages.map(({ id, imageSrc, imageAlt }) => (
                <div key={id} className="w-1/2 mx-auto flex justify-center items-center">
                    <img src={imageSrc} alt={imageAlt} className="p-4 cursor-pointer" />
                </div>
            ))
        }
    </section>
);

export default Branding;