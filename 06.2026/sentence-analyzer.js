function analyze(sentence) {
    let result = [];

    let words = sentence.split(" ");
    let wordCount = words.length;

    result = result + "wordsCount: " + wordCount + "\n";
    
    let charCount = sentence.replace(/ /g, "");
    result = result + "charCount: " + charCount.length + "\n";
    
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
    result = result + "mostFrequent: " + mostFrequent + "\n";

    let reversed = "";
    for (let index = words.length - 1; index >= 0; index--) {
        reversed = reversed + words[index] + " ";
    }
    result = result + "reversed: " + reversed + "\n"
    
    let text = sentence.toLowerCase();
    text = text.replace(/ /g, "");
    let letters = text.split("");
    
    let isPalindrome;
    for (let index = letters.length - 1; index >= 0; index--) {
        isPalindrome = isPalindrome + letters[index];
    } 
    if (isPalindrome === text) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
    result = result + "isPalindrome: " + isPalindrome;

    return result;
}

console.log (analyze("to be or not to be"));