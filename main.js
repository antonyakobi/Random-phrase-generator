function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function makePhrases() {
    const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
    const words2 = ["любит есть", "хочет погрызть", "всегда ищет"];
    const words3 = ["морковку", "макороны", "косточку"];

    // const randomIndex_1 = Math.floor(Math.random() * words1.length)
    // const randomIndex_2 = Math.floor(Math.random() * words1.length)
    // const randomIndex_3 = Math.floor(Math.random() * words1.length)
    // const phrase = words1[randomIndex_1] + " " + words2[randomIndex_2] + " " + words3[randomIndex_3]

    // const phrase = getRandomElement(words1) + " " + getRandomElement(words2) + " " + getRandomElement(words3)
    // return phrase

    return getRandomElement(words1) + " " + getRandomElement(words2) + " " + getRandomElement(words3)
}

alert(makePhrases())
console.log(makePhrases());

