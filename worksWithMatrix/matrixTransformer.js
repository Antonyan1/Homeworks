function createMatrix(num) {
    let matrix = [];
    let numberCycle = 1;

    for (let row = 0; row < num; row++) {
        matrix.push([]);
        for (let col = 0; col < num; col++) {
            matrix[row].push(numberCycle);
            numberCycle++
        }
    }
    return matrix;
}

console.log (createMatrix(4))
function flipH (matrix, number) {
    for (let row = 0; row < number; row++) {
        for (let col = 0; col < number / 2; col++) {
            let box = matrix[row][col];
            matrix[row][col] = matrix[row][number - col - 1];
            matrix[row][number - col - 1] = box;
        }
    }
}
let m = createMatrix(4);
flipH(m, 4);
console.log(m);

function flipV (matrix, number) {
    for (let row = 0; row < number / 2; row++) {
        for (let col = 0; col < number; col++) {
            let box = matrix[row][col];
            matrix[row][col] = matrix[number - row - 1][col];
            matrix[number - row - 1][col] = box
        }
    }
}

let n = createMatrix(4);
flipV(n, 4);
console.log(n); 

function afterTranspose (matrix, number) {
    for (let row = 0; row < number; row++) {
        for (let col = row + 1; col < number; col++) {
            let box = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = box;
        }
    }
}

let f = createMatrix(4);
afterTranspose(f, 4);
console.log(f);

function rotate90 (matrix, number) {
    for (let row = 0; row < number; row++) {
        for (let col = row + 1; col < number; col++) {
            let box = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = box;
        }
    }
    for (let row = 0; row < number; row++) {
        for (let col = 0; col < number / 2; col++) {
            let box = matrix[row][col];
            matrix[row][col] = matrix[row][number - col - 1];
            matrix[row][number - col - 1] = box;
        }
    }
}

let t = createMatrix(4);
rotate90(t, 4);
console.log(t); 