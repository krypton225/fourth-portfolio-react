const Input = ({ isInput = true, inputType = "text", inputName = "", inputID = "", inputPlaceHolder = "", additionStyle = "" }) => {
    return (
        <>
            {
                isInput ?
                    <input className={`w-full p-3 my-6 rounded-lg bg-[#333] text-white placeholder:capitalize focus:outline-0 focus:border-0 ${additionStyle}`}
                        type={inputType} name={inputName} id={inputID} placeholder={inputPlaceHolder} autoComplete="new-password" /> :
                    <textarea id={inputID} className={`w-full p-3 my-6 rounded-lg bg-[#333] text-white
                    placeholder:capitalize focus:outline-0 focus:border-0 ${additionStyle}`} placeholder={inputPlaceHolder} autoComplete="new-password" />
            }
        </>
    )
}

export default Input;