function compress(str) {
    let result = ""; 
    let numBox = 1

    let lastIndexBox = str[0];
    for (let index = 1; index < str.length; index++) {
        if (lastIndexBox === str[index]) {
            numBox++
        } else {
            result =  result + numBox + lastIndexBox;
            lastIndexBox = str[index];
            numBox = 1
        }
    }
    result = result + numBox + lastIndexBox;
    return result;
}

function decompress(str) {
    let result = "";
    let numBox = "";

    for (let index = 0; index < str.length; index++) {
        if (!isNaN(str[index])) {
            numBox = numBox + str[index];
        } else if (isNaN(str[index])) {
            result = result + str[index].repeat(numBox);
            numBox = "";
        }
    }
    return result;
}

console.log(compress("aaabbc"));
console.log(decompress("12a6b21c"));
let compressed = compress("aaaaaaaaaaaa"); // 12 букв 'a'
console.log(compressed);
console.log(decompress(compressed));