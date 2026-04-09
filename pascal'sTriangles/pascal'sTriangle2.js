function pascalsTriangle (number) {
    let result;
    let arr = [
        [1],
        [1, 1]
    ];
    
    for (let triangleCycle = 0; triangleCycle < number - 2; triangleCycle++) {
        let lastRow = arr[arr.length - 1];
        let newRow = [];
        newRow.push(1);

        for (let cycle = 1; cycle < lastRow.length; cycle++) {
            newRow[cycle] = lastRow[cycle - 1] + lastRow[cycle];
        }

        newRow.push(1);
        arr.push(newRow);

    }
    return arr;
}

function printTheTriangle(triangle) {
    let result = "";

    for (let addRowCycle = 0; addRowCycle < triangle.length; addRowCycle++) {
        for (let cycle = 0; cycle < triangle[addRowCycle].length ; cycle++) {
            result = result + triangle[addRowCycle][cycle] + " "
        }
        result = result + "\n"
    }
    return result;
}

function printTheTriangleCentered(triangle) {
    let arr = triangle;
    let result = "";
    let cycleForSpaceCycle = 0;

    for (let rowCycle = 0; rowCycle < triangle.length; rowCycle++) {
        let row = triangle[rowCycle];

        for (let spaceCycle = 0; spaceCycle < triangle.length - cycleForSpaceCycle; spaceCycle++) {
            result = result + " ";
        }

        for (let number = 0; number < row.length; number++) {
            result = result + row[number] + " ";
        }

        cycleForSpaceCycle++
        result = result + "\n";
    }
    return result;
}

const myTriangle = pascalsTriangle(7);

console.log(printTheTriangle(myTriangle));
console.log(printTheTriangleCentered(myTriangle));
