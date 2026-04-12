function spiralMatrixExercise (number) {
    let array = [];
    let numberCycle = 1

    for (let rowsCycle = 0; rowsCycle < number; rowsCycle++) {
        array.push([]);
        for (let numbersCycle = 0; numbersCycle < number; numbersCycle++) {
            array[rowsCycle].push(0);
        }
    }
        for (let rightCycle = 0; rightCycle < number; rightCycle++) {
            array[0][rightCycle] = numberCycle;
            numberCycle++
        }
        for (let downCycle = 1; downCycle < number; downCycle++) {
            array[downCycle][number - 1] = numberCycle
            numberCycle++
        }
        for (let leftCycle = number - 2; leftCycle >= 0; leftCycle--) {
            array[number - 1][leftCycle] = numberCycle 
            numberCycle++;
        }
        for (let upCycle = number - 2; upCycle > 0; upCycle--) {
            array[upCycle][0] = numberCycle 
            numberCycle++
        }
        
    return array;
}

console.log(spiralMatrixExercise(5))

// [
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ]
// ]