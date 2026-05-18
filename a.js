function mineCount (rows, cols, mines) {
    let grid = [];
    for (let mapCycle = 0; mapCycle < rows; mapCycle++) {
        grid.push ([]);
        for (let colsCycle = 0; colsCycle < cols; colsCycle++) {
            grid[mapCycle].push(0);
        }
    }

    for (let fillingMines = 0; fillingMines < mines; fillingMines++) {
        grid[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)] = '*'
    }
    return grid
}

console.log (mineCount(4,5,2));

let box = mineCount(4,5,2)
function solveBoard(grid, rows, cols) {
    for (let rowsCycle = 0; rowsCycle < rows; rowsCycle++) {
        for (let colsCycle = 0; colsCycle < cols; colsCycle++) {
            let indexBox = 0

            if(grid[rowsCycle][colsCycle] !== '*') {
                for (let i = rowsCycle - 1; i <= rowsCycle + 1; i++) {
                    for (let j = colsCycle - 1; j <= colsCycle + 1; j++) {
                        if (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length) {
                            if (!(i === rowsCycle && j === colsCycle)) {
                                if (grid[i][j] === '*') {
                                    indexBox++;
                                }
                            }
                        }
                    }
                }   
                grid[rowsCycle][colsCycle] = indexBox;
            }
        }
    }
    return grid
} 

console.log(solveBoard(box, 4, 5))