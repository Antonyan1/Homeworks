function matrixMirroring (n, m) {
    let array = []
    let outputResult = []
    let numbers = 1
    let box = []

    for (let rowsCycle = 0; rowsCycle < n; rowsCycle++) {
        array.push([]);
        for (let numbersCycle = 0; numbersCycle < m; numbersCycle++) {
            array[rowsCycle].push(0);
        }
    }
    for (let rowsCycle = 0; rowsCycle < n; rowsCycle++) {
        for (let matrixCycle = 0; matrixCycle < m; matrixCycle++) {
            array[rowsCycle][matrixCycle] = numbers
            numbers++
        }
    }
    let arrayHorizonalFlip = structuredClone(array);
    
    for (let horizontalFlipCycle = 0; horizontalFlipCycle < n; horizontalFlipCycle++) {
        for (let horizontalFlip = 0; horizontalFlip < m / 2; horizontalFlip++) {
            box = arrayHorizonalFlip[horizontalFlipCycle][horizontalFlip];
            arrayHorizonalFlip[horizontalFlipCycle][horizontalFlip] = arrayHorizonalFlip[horizontalFlipCycle][m - horizontalFlip - 1];
            arrayHorizonalFlip[horizontalFlipCycle][m - horizontalFlip - 1] = box;
        }
    }
    box = []
    let arrayVerticalFlip = structuredClone(array);

    for (let verticalFlipRows = 0; verticalFlipRows < n / 2; verticalFlipRows++) {
        box = arrayVerticalFlip[verticalFlipRows];
        arrayVerticalFlip[verticalFlipRows] = arrayVerticalFlip[n - 1 - verticalFlipRows];
        arrayVerticalFlip[n - 1 - verticalFlipRows] = box
    }
    outputResult.push(array);
    outputResult.push(arrayHorizonalFlip);
    outputResult.push(arrayVerticalFlip);
    
    return outputResult;
    
}

console.log (matrixMirroring(4, 5));