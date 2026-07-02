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
    let numBox = 1;
    for (let index = 0; index < str.length; index = index + 2) {
        for (true) {
            if (str[index] === str[index + 1]) {
                numBox++
            } else {break}
        }
        let numCycle = Number(str[index]);
        let letter = str[index + 1];
        for (let numQuantity = 0; numQuantity < numBox; numQuantity++) {
            
        }
    }
    return result;
}

console.log(compress("aaabbc"));
console.log(decompress("34a2b1c"));

let compressed = compress("aaaaaaaaaaaa"); // 12 букв 'a'
console.log(compressed);
console.log(decompress(compressed));