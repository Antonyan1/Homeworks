function matrixMirroring (number) {
    let array = []
    let outputResult = []
    let numbers = 1
    let box = []

    for (let rowsCycle = 0; rowsCycle < number; rowsCycle++) {
        array.push([]);
        for (let numbersCycle = 0; numbersCycle < number; numbersCycle++) {
            array[rowsCycle].push(0);
        }
    }
    for (let rowsCycle = 0; rowsCycle < number; rowsCycle++) {
        for (let matrixCycle = 0; matrixCycle < number; matrixCycle++) {
            array[rowsCycle][matrixCycle] = numbers
            numbers++
        }
    }
    let arrayHorizonalFlip = structuredClone(array);
    
    for (let horizontalFlipCycle = 0; horizontalFlipCycle < number; horizontalFlipCycle++) {
        for (let horizontalFlip = 0; horizontalFlip < number / 2; horizontalFlip++) {
            box = arrayHorizonalFlip[horizontalFlipCycle][horizontalFlip];
            arrayHorizonalFlip[horizontalFlipCycle][horizontalFlip] = arrayHorizonalFlip[horizontalFlipCycle][number - horizontalFlip - 1];
            arrayHorizonalFlip[horizontalFlipCycle][number - horizontalFlip - 1] = box;
        }
    }
    box = []
    let arrayVerticalFlip = structuredClone(array);

    for (let verticalFlipRows = 0; verticalFlipRows < number / 2; verticalFlipRows++) {
        box = arrayVerticalFlip[verticalFlipRows];
        arrayVerticalFlip[verticalFlipRows] = arrayVerticalFlip[number - 1 - verticalFlipRows];
        arrayVerticalFlip[number - 1 - verticalFlipRows] = box
    }
    outputResult.push(array);
    outputResult.push(arrayHorizonalFlip);
    outputResult.push(arrayVerticalFlip);
    
    return outputResult;
    
}

console.log (matrixMirroring(5));
