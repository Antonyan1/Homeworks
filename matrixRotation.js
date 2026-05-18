function matrixRotation (number) {
    let result = []
    let numbersCycle = 1;

    let array = [];
    for (let matrixRotationCycle = 0; matrixRotationCycle < number; matrixRotationCycle++) {
        array.push([]);
        for (let fillingNumbersCycle = 0; fillingNumbersCycle < number; fillingNumbersCycle++) {
            array[matrixRotationCycle].push(numbersCycle);
            numbersCycle++
        }
    }
    result.push(structuredClone(array));

    
    for (let row = 0; row < number - 1; row++) {
        for (let col = row + 1; col < number; col++) {
            let box = array[row][col];
            array[row][col] = array[col][row];
            array[col][row] = box;
        }
    }
    result.push(structuredClone(array));

    for (let row = 0; row < number; row++) {
        for (let col = 0; col < number / 2; col++) {
            let box = array[row][col];
            array[row][col] = array[row][number - col - 1];
            array[row][number - col - 1] = box;
        }    
    }
    result.push(structuredClone(array));

    return result;
}

console.log(matrixRotation(4));