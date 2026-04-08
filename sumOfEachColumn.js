let arr = [
  [7, 12, 3, 25, 9],
  [14, 1, 18, 6, 20],
  [5, 11, 2, 30, 8],
  [19, 4, 16, 10, 13],
  [21, 15, 24, 17, 22]
];

function checkArray () {
    let check = arr[0].length
    let cycle = 0 
    while (cycle < arr.length) {
        if (arr[cycle].length !== check) {
            return false
        }
        cycle++
    }
    return true
}

function sumOfEachColumn () {
    let tox = 0 
    let result = ""

    if (checkArray() === true) {
        for (let pillar = 0; pillar < arr.length; pillar++) {
        tox = 0
        while (tox < arr.length) {
            result = result + arr[tox][pillar] + " "
            tox++
        }
        result = result + "\n"
        }
        return result
    } else {
        console.log ("the quantity every row is'nt equal")
        return
    }
    
}

console.log(sumOfEachColumn())