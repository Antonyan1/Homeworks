function mineSweeper (rows, cols, mines) {
    let minefield = [];
    for (let mapCycle = 0; mapCycle < rows; mapCycle++) {
        minefield.push ([]);
        for (let colsCycle = 0; colsCycle < cols; colsCycle++) {
            minefield[mapCycle].push(0);
        }
    }

    for (let fillingMines = 0; fillingMines < mines; fillingMines++) {
        minefield[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)] = '*'
    }

    let box = 0;
    while (true) {
        box = 0
        for (let checkRows = 0; checkRows < rows; checkRows++) {
            for (let checkingIndex = 0; checkingIndex < cols; checkingIndex++) {
                if (minefield[checkRows][checkingIndex] === "*") {
                    box++;
                }
            }
        }   
        if (box === mines) {
            break
        } else {
            minefield[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)] = '*'
        }
    }
        
    return minefield;
}

console.log (mineSweeper( 4, 5, 2)) // here you will write 1. rows 2. cols 3. mines!