function spiralMatrixExercise (number) {
    let array = [];
    let numbersCycle = 1;
    for (let rowsCycle = 0; rowsCycle < number; rowsCycle++) {
        array.push([]);
        for (let numbersCycle = 0; numbersCycle < number; numbersCycle++) {
            array[rowsCycle].push(0);
        }
    }
    for (let cycle = 0; cycle < number; cycle++) {
        for (let upper = 0; upper < number ; upper++) {
            if (array[cycle][upper] === 0) {
                array[cycle][upper] = numbersCycle;
                numbersCycle++;
            }
        }
        for (let rightColumnCycle = 0; rightColumnCycle < number; rightColumnCycle++) {
            if (array[rightColumnCycle][number - 1 - cycle] === 0) {
                array[rightColumnCycle][number - 1 - cycle] = numbersCycle;
                numbersCycle++;
            }
        }
        for (let lower = number - 2; lower >= 0; lower--) {
            if (array[number - 1][lower] === 0) {
                array[number - 1][lower] = numbersCycle; 
                numbersCycle++;
            }
        }
        for (let leftColumnCycle = number - 2; leftColumnCycle > 0; leftColumnCycle--) {
            if (array[leftColumnCycle][0] === 0) {
                array[leftColumnCycle][0] = numbersCycle;
                numbersCycle++;
            }
        }
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