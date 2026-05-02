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

    for (let rowsCycle = 0; rowsCycle < rows; rowsCycle++) {
        for (let colsCycle = 0; colsCycle < cols; colsCycle++) {
            let indexBox = 0
            if (minefield[rowsCycle][colsCycle] !== "*") {
                if (minefield[rowsCycle - 1][colsCycle - 1] >= 0) {
                    if (minefield[rowsCycle - 1][colsCycle - 1] === "*") {
                    indexBox++
                    }    
                }
                if (minefield[rowsCycle - 1][colsCycle] >= 0) {
                    if (minefield[rowsCycle - 1][colsCycle] === "*") {
                    indexBox++
                    }    
                }
                if (minefield[rowsCycle - 1][colsCycle + 1] >= 0) {
                    if (minefield[rowsCycle - 1][colsCycle + 1] === "*") {
                    indexBox++
                    }    
                }
                if (minefield[rowsCycle][colsCycle - 1] >= 0) {
                    if (minefield[rowsCycle][colsCycle - 1] === "*") {
                    indexBox++
                    }    
                }
                if (minefield[rowsCycle][colsCycle + 1] >= 0) {
                    if (minefield[rowsCycle][colsCycle + 1] === "*") {
                    indexBox++
                    }  
                }
                if (minefield[rowsCycle + 1][colsCycle - 1] >= 0) {
                    if (minefield[rowsCycle + 1][colsCycle - 1] === "*") {
                    indexBox++
                    } 
                }
                if (minefield[rowsCycle + 1][colsCycle + 1] >= 0) {
                    if (minefield[rowsCycle + 1][colsCycle + 1] === "*") {
                    indexBox++
                    } 
                }
                if (minefield[rowsCycle + 1][colsCycle] >= 0) {
                    if (minefield[rowsCycle + 1][colsCycle] === "*") {
                    indexBox++
                    } 
                }
                minefield[rowsCycle][colsCycle] = indexBox
            }
        }
    }
        
    return minefield;
}

console.log (mineSweeper( 4, 5, 2)) // here you will write 1. rows 2. cols 3. mines!