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
    for (let index = 0; index < str.length; index = index + 2) {
        let numCycle = Number(str[index]);
        let letter = str[index + 1];

        result = result + letter.repeat(numCycle);
    }
    return result;
}

console.log(compress("aaabbc"));
console.log(decompress("3a2b1c"));