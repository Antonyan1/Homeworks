function analyze(sentence) {
    let result = {}

    let words = sentence.split(" ");
    let wordCount = words.length;
    result.wordsCount = wordCount;
    
    let charCount = sentence.replace(/ /g, "");
    result.charCount = charCount.length;
    
    let counter = {};
    for (let word of words) {
        word = word.toLowerCase();
        if (counter[word] !== undefined) {
            counter[word]++
        } else {
            counter[word] = 1;
        }
    }
    let mostFrequent = "";
    let maxCount = 0;
    
    for (let key in counter) {
        if (counter[key] > maxCount) {
            maxCount = counter[key];
            mostFrequent = key;
        }   
    }
    result.mostFrequent = mostFrequent;

    let reversed = "";
    for (let index = words.length - 1; index >= 0; index--) {
        if (index !== 0) {
            reversed = reversed + words[index] + " ";
        } else {
            reversed = reversed + words[index];
        }
    }
    result.reversed = reversed;
    
    let text = sentence.toLowerCase();
    text = text.replace(/ /g, "");
    let letters = text.split("");
    
    let isPalindrome = "";
    for (let index = letters.length - 1; index >= 0; index--) {
        isPalindrome = isPalindrome + letters[index];
    }
    if (isPalindrome === text) {
        isPalindrome = true;
    } else if (isPalindrome !== text) {
        isPalindrome = false;
    }
    result.isPalindrome =  isPalindrome;
    return result;
}

console.log (analyze("to be or not to be"));
console.log(analyze("never odd or even"))