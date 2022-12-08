const coloring = (function () {
    const firstLetters = (sentence = "") => {
        const arr = sentence.trim().split(" ");
        let newText = "";

        for (const i in arr) {
            newText += `<span class="text-light-beige capitalize">${arr[i].slice(0, 1)}</span>${arr[i].slice(1)} `;
        }

        return newText;
    }

    return {
        setFirstLetterColor: firstLetters
    }
})();

export default coloring.setFirstLetterColor;