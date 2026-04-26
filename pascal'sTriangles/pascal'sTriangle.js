function pascalsTriangle (number) {
    let result;
    let arr = [
        [1],
        [1, 1]
    ];
    
    for (let triangleCycle = 0; triangleCycle < number - 2; triangleCycle++) {
        let lastRow = arr[arr.length - 1];
        let newRow = [];
        newRow.push(1)

        for (let cycle = 1; cycle < lastRow.length; cycle++) {
            newRow[cycle] = lastRow[cycle - 1] + lastRow[cycle];
        }

        newRow.push(1)
        arr.push(newRow);

    }
    return arr;
}

console.log(pascalsTriangle(6));