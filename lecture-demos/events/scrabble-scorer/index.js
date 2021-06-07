/*
scrabble scoring functions:
*/

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

const VOWELS = "aeiou";

const CONSONANTS = LETTERS.split("").filter((letter) => VOWELS.includes(letter) ? "" : letter).join("")

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

function transformOldPointStructure() {
    let tempStruct = {};
    for(let key in oldPointStructure) {
        for(let value of oldPointStructure[key]) {
            tempStruct[value] = Number(key);
        }
    }
    return tempStruct;
}

const newPointStructure = transformOldPointStructure();

function simpleScore(word) {
    return word.toLowerCase().split("").filter((letter) => LETTERS.includes(letter) ? letter : "").join("").length;
}

function scrabbleScore(word) {
    return word.split("").reduce((acc, letter) => acc + newPointStructure[letter.toUpperCase()], 0)
}


function bonusVowelScore(word) {
    return word.split("").map((letter) => VOWELS.includes(letter.toLowerCase()) ? 3 : 1).reduce((acc, value) => acc + value);
}

const radioSimpleScore = document.getElementById("simpleScore");
const radioVowelBonusScore = document.getElementById("vowelBonusScore");
const radioScrabbleScore = document.getElementById("scrabbleScore");

const userInput = document.getElementById("user-word");

const button = document.getElementById("score-button");

const scoreParagraph = document.getElementById("score-paragraph");

button.addEventListener('click', function() {
    // get the word
    let word = userInput.value;

    // determine the scoring algorithm & score
    let score;

    if(radioSimpleScore.checked) {
        score = simpleScore(word);
    }
    if(radioVowelBonusScore.checked) {
        score = bonusVowelScore(word);
    }
    if(radioScrabbleScore.checked) {
        score = scrabbleScore(word);
    }

    // update the scoreParagraph element with the score
    scoreParagraph.innerHTML = `The word ${word} is worth ${score} points!`;
});