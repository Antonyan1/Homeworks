function matrixRotation (number) {
    let numbersCycle = 1;

    let original = [];
    for (let matrixRotationCycle = 0; matrixRotationCycle < number; matrixRotationCycle++) {
        original.push([]);
        for (let fillingNumbersCycle = 0; fillingNumbersCycle < number; fillingNumbersCycle++) {
            original[matrixRotationCycle].push(numbersCycle);
            numbersCycle++
        }

    }
    
    let afterTransposeArray = [];
    for (let afterTransposeCycle = 0; afterTransposeCycle < number; afterTransposeCycle++) {
        afterTransposeArray.push([]);
        for (let fillingZeroInAfterTransposeCycle = 0; fillingZeroInAfterTransposeCycle < number; fillingZeroInAfterTransposeCycle++) {
            afterTransposeArray[afterTransposeCycle].push(0);
        }
    }
    numbersCycle = 1;
    for (let afterTransposeCycle = 0; afterTransposeCycle < number; afterTransposeCycle++) {
        
        for (let fillingNumbersInAfterTransposeCycle = 0; fillingNumbersInAfterTransposeCycle < number; fillingNumbersInAfterTransposeCycle++) {
            afterTransposeArray[fillingNumbersInAfterTransposeCycle][afterTransposeCycle] = numbersCycle;
            numbersCycle++
        }
    }
    
    let rotatedClockwiseArray = structuredClone(afterTransposeArray)
    let box
    for (let rotatedClockwiseCycle = 0; rotatedClockwiseCycle < number; rotatedClockwiseCycle++) {
        for (let rowCycle = 0; rowCycle < number / 2; rowCycle++) {
            box = rotatedClockwiseArray[rotatedClockwiseCycle][rowCycle];
            rotatedClockwiseArray[rotatedClockwiseCycle][rowCycle] = rotatedClockwiseArray[rotatedClockwiseCycle][number - rowCycle - 1];
            rotatedClockwiseArray[rotatedClockwiseCycle][number - rowCycle - 1] = box
            
        }
    }

    let result = [];
    result.push(original);
    result.push(afterTransposeArray);
    result.push(rotatedClockwiseArray)
    return result;
}

console.log(matrixRotation(4));