import { Button, Input } from "./index";

const ContactForm = () => {
    return (
        <form className="w-full mt-4 lg:mt-0 lg:w-[50%] flex flex-col justify-center items-start">
            <div className="w-full grid grid-col-1 lg:grid-col-2 gap-0">
                <Input inputName="name" inputID="name" inputPlaceHolder="your name" additionStyle={"mt-0"} />
                <Input inputName="email" inputID="email" inputPlaceHolder="your email" />
            </div>

            <div className="w-full">
                <Input inputName="subject" inputID="subject" inputPlaceHolder="subject" />
                <Input isInput={false} inputName="msg" inputID="msg" inputPlaceHolder="your message" additionStyle={"min-h-[14rem]"} />
            </div>

            <Button text="send message" hyperRef="home" additionStyle="w-full md:w-auto capitalize mt-4" />
        </form>
    )
}

export default ContactForm;