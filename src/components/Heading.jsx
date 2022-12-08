import { Markup } from "interweave";

import { coloringFirstLetters } from "../functions/index";

const Heading = ({ textSentence, caveatFont = true, additionStyles = "" }) => (
    <h4 className={`text-white text-4xl lg:text-5xl ${caveatFont ? "font-[Caveat]" : ""} ${additionStyles}`}>
        <Markup content={coloringFirstLetters(textSentence)} />
    </h4>
)

export default Heading;