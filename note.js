let array = [[0,   1,  2,  3, 4],
             [5,   6,  7,  8, 9],
             [10, 11, 12, 13, 14],
             [15, 16, 17, 18, 19],
             [20, 21, 22, 23, 24]];

function printNeighbourd(array, r, c) {
    for (let i = r - 1; i <= r + 1; i++) {
        for (let j = c - 1; j <= c + 1; j++) {
            if (i >= 0 && j >= 0 && i < array.length && j < array[i].length) {
                if (!(i === r && j === c)) {
                    console.log(array[i][j]);
                }
            }
        }
    }
}

printNeighbourd(array, 0, 0);

console.log('-----------------');
printNeighbourd(array, 3, 2);

console.log('-----------------');
printNeighbourd(array, 1, 4);

console.log('-----------------');
printNeighbourd(array, 1100000, 100000);

console.log('-----------------');


