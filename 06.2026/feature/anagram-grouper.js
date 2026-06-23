function isAnagram(word1, word2) {
    let index = 0;

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    
    word1 = word1.split("");
    word2 = word2.split("");
    
    word1 = word1.sort();
    word2 = word2.sort();
    
    if (word1.length !== word2.length) {
        return false;
    }

    for (; index < word1.length; index++) {
        if (word1[index] === word2[index]) {
            continue;
        } else {
            return false;
        }
    }

    if (index === word1.length) {
        return true;
    }
}

function groupAnagrams(words) {
    let groups = [
        [words[0]]
    ];

    for (let index = 1; index < words.length; index++) {
        let find = false;

        for (let gs = 0; gs < groups.length; gs++) {
            if (isAnagram(words[index], groups[gs][0]) === true) {
                groups[gs].push(words[index]);
                find = true;
                break;
            }
        }

        if (find === false) {
            groups.push([words[index]]);
        }
    }

    return groups;
}

console.log(isAnagram("tan", "eat"));
console.log(isAnagram("ate", "eat"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("listen", "silent"));

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));