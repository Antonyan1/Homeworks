let arr = [
  [7, 12, 3, 25, 9],
  [14, 1, 18, 6, 20],
  [5, 11, 2, 30, 8],
  [19, 4, 16, 10, 13],
  [21, 15, 24, 17, 22]
];

function largestNumber() {
    let result = 0;

    for (let cycle = 0; cycle < arr.length; cycle++) {
        let cycleNumber2 = 0;
        let box = arr[cycle][0];

        while (cycleNumber2 < arr[cycle].length) {
            if (arr[cycle][cycleNumber2] > box) {
                box = arr[cycle][cycleNumber2]
            }
            cycleNumber2++
        }
        if (box > result) {
            result = box
        }
    }
    return result
}

console.log(largestNumber())