let arr = [
  [7, 12, 3, 25, 9],
  [14, 1, 18, 6, 20],
  [5, 11, 2, 30, 8],
  [19, 4, 16, 10, 13],
  [21, 15, 24, 17, 22]
];

function largestNumber(array) {
    let result = 0;

    for (let cycle = 0; cycle < array.length; cycle++) {
        let box = array[cycle][0];

        for (let cycleNumber2 = 0; cycleNumber2 < array[cycle].length; cycleNumber2++) {
            if (array[cycle][cycleNumber2] > box) {
                box = array[cycle][cycleNumber2]
            }
        }
        if (box > result) {
            result = box
        }
    }
    return result
}

console.log(largestNumber(arr))