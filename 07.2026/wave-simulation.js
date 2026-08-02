function createGrid(rows, cols) {
    let grid = [];
    for (let row = 0; row < rows; row++) {
        grid.push([]);
        for (let col = 0; col < cols; col++) {
            grid[row].push(".");  
        }
    }
    return grid;
}
function placeWalls(grid, wallList) {
    for (let indexArray = 0; indexArray < wallList.length; indexArray++) {
        let wall = wallList[indexArray];

        grid[wall.row][wall.col] = "#";
    }
    return grid;
}
function displayGrid(grid) {
    let moreImprovedGrid = "";

    for (let row = 0; row < grid.length; row++) {
        let gridRows = grid[row];
        moreImprovedGrid = moreImprovedGrid + gridRows.join("  ") + "\n";
    }

    return moreImprovedGrid;
}
function placeSource(grid, row, col) {
    if (grid[row] !== undefined && grid[row][col] !== undefined) {
        if (grid[row][col] !== "#") {
            grid[row][col] = 0;
            return grid
        } else {
            return "Error while placing, this space is occupied by a wall"
        }
    } else {
        return "Error, such a place does not exist"
    }
}
function waveStep(grid, stepNumber) {
    let ourSourceIsFound = false;
    let directions = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1]
    };
    let cells = 0;
    let transformObject = Object.keys(directions);
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === stepNumber - 1) {
                for (let passageInDirections = 0; passageInDirections < transformObject.length; passageInDirections++) {
                    let dirName = transformObject[passageInDirections];
                    let dirRow = directions[dirName][0];
                    let dirCol = directions[dirName][1];

                    let newRow = row + dirRow;
                    let newCol = col + dirCol;
                    if (grid[newRow] !== undefined && grid[newRow][newCol] !== undefined && grid[newRow][newCol] === ".") {
                        grid[newRow][newCol] = stepNumber;
                        cells++
                    }
                }
            }
        }
    }
    let result = grid + "This is how many cells we placed " + cells; 
    return cells;
}
function propagate(grid) {
    let waveIsMoving = true;
    let cells = 0;
    for (let stepWave = 1; waveIsMoving === true; stepWave++) {
        let filledCells = waveStep(grid, stepWave);

        if (filledCells === 0) {
            waveIsMoving = false;
        } else {
            cells++
        }
    }
    return cells;
}
function distanceTo(grid, row, col) {
    if (typeof grid[row][col] === "number") {
        return grid[row][col];
    } else if (grid[row][col] === ".") {
        return "Unreachable";
    } else {
        return "Wall";
    }
}

function unreachableCells(grid) {
    let count = 0;
    let position = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row] !== undefined && grid[row][col] !== undefined) {
                if (grid[row][col] === ".") {
                    count++
                    let cellPosition = {
                        row: row,
                        col: col
                    };
                    position.push(cellPosition);
                }
            }
        }
    }
    return {
        count: count,
        positions: position
    };
}

function gridStats(grid) {
    let totalCells = grid.length * grid[0].length;
    let walls = 0;
    let reached = 0;
    let unreachable = 0;
    let maxDistance = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "#") {
                walls++;
            } else if (grid[row][col] === ".") {
                unreachable++;
            } else if (typeof grid[row][col] === "number") {
                reached++;
                if (grid[row][col] > maxDistance) {
                    maxDistance = grid[row][col];
                }
            }
        }
    }
    return {
        totalCells: totalCells,
        walls: walls,
        reached: reached,
        unreachable: unreachable,
        maxDistance: maxDistance
    };
}
function saveGrid(grid) {
    let rows = ""
    for (let row = 0; row < grid.length; row++) {
        rows = rows + grid[row].join(",") + "|"
    }
    rows = rows.slice(0, -1);

    return rows;
}

function loadGrid(string) {
    let rows = string.split("|");
    let grid = [];

    for (let row = 0; row < rows.length; row++) {
        let cells = rows[row].split(",");
        for (let col = 0; col < cells.length; col++) {
            if (cells[col] !== "." && cells[col] !== "#") {
                cells[col] = Number(cells[col]);
            }
        }
        grid.push(cells);
    }

    return grid;
}

let grid = createGrid(6, 6);

let walls = [
    { row: 1, col: 3 },
    { row: 2, col: 3 },
    { row: 3, col: 3 }
];
placeWalls(grid, walls);
placeSource(grid, 0, 0);

let totalSteps = propagate(grid);

console.log(displayGrid(grid));
console.log(totalSteps);
let saved = saveGrid(grid);

console.log(saved);