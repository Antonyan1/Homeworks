let arr = [
  [7, 12, 3, 25, 9],
  [14, 1, 18, 6, 20],
  [5, 11, 2, 30, 8],
  [19, 4, 16, 10, 13],
  [21, 15, 24, 17, 22]
];

function sumOfEachRow (array) {
    let result = "";
    
    for (let cycle = 0; cycle < array.length; cycle++) {
        
        for (let cycleNum2 = 0; cycleNum2 < array[cycle].length; cycleNum2++) {
            let box = 0;
            box = box + array[cycle][cycleNum2];
        }
        result = result + box + "\n";
    }
    return result;
}

console.log(sumOfEachRow(arr));