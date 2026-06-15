function mineSweeper (rows, cols, mines) {
    let minefield = [];
    if (mines > rows * cols) {
        return "there too many mines"
    }
    for (let mapCycle = 0; mapCycle < rows; mapCycle++) {
        minefield.push ([]);
        for (let colsCycle = 0; colsCycle < cols; colsCycle++) {
            minefield[mapCycle].push(0);
        }
    }
    
    let minesBox = 0
    while (minesBox < mines) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * cols);
        if (minefield[r][c] !== "*") {
        minefield[r][c] = "*"
            minesBox++
        }
    }
    
    for (let rowsCycle = 0; rowsCycle < rows; rowsCycle++) {
        for (let colsCycle = 0; colsCycle < cols; colsCycle++) {
            let indexBox = 0

            if(minefield[rowsCycle][colsCycle] !== '*') {
                for (let i = rowsCycle - 1; i <= rowsCycle + 1; i++) {
                    for (let j = colsCycle - 1; j <= colsCycle + 1; j++) {
                        if (i >= 0 && j >= 0 && i < minefield.length && j < minefield[i].length) {
                            if (!(i === rowsCycle && j === colsCycle)) {
                                if (minefield[i][j] === '*') {
                                    indexBox++;
                                }
                            }
                        }
                    }
                }   
            minefield[rowsCycle][colsCycle] = indexBox;
            }
        
        }
    }

    return minefield;
}

console.log (mineSweeper( 4, 5, 2)) // here you will write 1. rows 2. cols 3. mines!