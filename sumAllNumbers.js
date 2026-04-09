  let arr = [
  [7, 12, 3, 25, 9],
  [14, 1, 18, 6, 20],
  [5, 11, 2, 30, 8],
  [19, 4, 16, 10, 13],
  [21, 15, 24, 17, 22]
];

function sumAllNumbers () {
    let result = 0;
    
    for (let cycle = 0; cycle < arr.length; cycle++) {
        let box = 0;
        for (let cycleNum2 = 0; cycleNum2 < arr[cycle].length; cycleNum2++) {
            box = box + arr[cycle][cycleNum2]
        }
        result = result + box;
    }
    return result
}

console.log(sumAllNumbers())