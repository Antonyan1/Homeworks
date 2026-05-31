let arr = [
  [7, 12, 3, 25, 9,],
  [14, 1, 18, 6, 20],
  [5, 11, 2, 30, 8],
  [19, 4, 16, 10, 13],
  [21, 15, 24, 17, 22]
];

function checkArray (array) {
    let check = array[0].length; 
    for (let cycle = 0; cycle < array.length; cycle++) {
        if (array[cycle].length !== check) {
            return false;
        }
    }
    return true;
}

function sumOfEachColumn (array) {
    let result = "";
    
    if (checkArray(array) === true) {
        for (let pillar = 0; pillar < array[0].length; pillar++) {
            let box = 0;
        
            for (let tox = 0; tox < array.length; tox++) {
            box = box + array[tox][pillar];
        }
        result = result + box + "\n"
        }
        return result
    } else {
        console.log ("the quantity every row is'nt equal")
        return
    }
    
}

console.log(sumOfEachColumn(arr));