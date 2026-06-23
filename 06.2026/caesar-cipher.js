function encode(text, shift) {
    let result = ""
    for (let cycle = 0; cycle < text.length; cycle++) {
        let code = text[cycle].charCodeAt(0);
        if (code >= 97 && code <= 122 || code >= 65 && code <= 90) {
            if (code >= 97 && code <= 122) {
                let newCode = code + shift
                if (newCode > 122) {
                    newCode = newCode - 26
                } else if (newCode < 97) {
                    newCode = newCode + 26
                }
                let newChar = String.fromCharCode(newCode );
                result = result + newChar;
            }
            if (code >= 65 && code <= 90) {
                let newCode = code + shift
                if (newCode > 90) {
                    newCode = newCode - 26
                } else if (newCode < 65) {
                    newCode = newCode + 26
                }
                let newChar = String.fromCharCode(newCode );
                result = result + newChar;
            } 
        } else {
            let newChar = String.fromCharCode(code);
            result = result + newChar;
        }
    }
    
    return result
}

function decode (text, shift) {
    return encode(text, -shift);
} 


console.log(encode("Hello World!", 3))//  →  "Khoor Zruog!"
console.log(decode("Khoor Zruog!", 3))//  →  "Hello World!"
console.log(encode("xyz", 2))//           →  "zab"
console.log(encode("ABC", 26))//          →  "ABC"
console.log(decode("abc", 5));
console.log(encode("XYZ", 26));