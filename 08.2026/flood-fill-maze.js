let grid = [
[1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 1],
[1, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1]
];

function floodFill(grid, row, col, newColor) {
    let directions = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
    };
    let oldColor = grid[row][col];
    if (oldColor === newColor) {
        return;
    }
    grid[row][col] = newColor;
    let dirNames = Object.keys(directions);
    for (let neighboringCells = 0; neighboringCells < dirNames.length; neighboringCells++) {
        let dirName = dirNames[neighboringCells];

        let dirRow = directions[dirName][0];
        let dirCol = directions[dirName][1];

        let nowRow = row + dirRow;
        let nowCol = col + dirCol;
        if (grid[nowRow] === undefined || grid[nowRow][nowCol] === undefined) {
            continue;
        }
        if (grid[nowRow][nowCol] === oldColor) {
            floodFill(grid, nowRow, nowCol, newColor);
        }
    }
}
let maze = [
["#", "#", "#", "#", "#", "#", "#"],
["#", "S", ".", ".", "#", ".", "#"],
["#", "#", "#", ".", "#", ".", "#"],
["#", ".", ".", ".", ".", ".", "#"],
["#", ".", "#", "#", "#", ".", "#"],
["#", ".", ".", ".", ".", ".", "#"],
["#", "#", "#", "#", "#", "E", "#"]
];
function solveMaze(maze, row, col) {
    let directions = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
    };
    let dirNames = Object.keys(directions);
    for (let neighboringCells = 0; neighboringCells < dirNames.length; neighboringCells++) {
        let dirName = dirNames[neighboringCells];

        let dirRow = directions[dirName][0];
        let dirCol = directions[dirName][1];

        let nowRow = row + dirRow;
        let nowCol = col + dirCol;
    
        if (maze[nowRow] === undefined || maze[nowRow][nowCol] === undefined) {
            continue;
        }
        if (maze[nowRow][nowCol] === "#" || maze[nowRow][nowCol] === "*") {
            continue;
        }
        if (maze[nowRow][nowCol] === ".") {
            maze[nowRow][nowCol] = "*";
            if (solveMaze(maze, nowRow, nowCol) === true) {
                return true;
            }
            maze[nowRow][nowCol] = ".";
        }
        if (maze[nowRow][nowCol] === "E") {
            return true;
        }
    }
    return false;
}

function pathExists(maze) {
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[0].length; col++) {
            if (maze[row][col] === "*") {
                return true;
            }
        }
    }
    return false;
}

function countDeadEnds(maze) {
    let directions = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
    };

    let deadEnds = 0;
    let dirNames = Object.keys(directions);

    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[0].length; col++) {
            if (maze[row][col] !== "*" && maze[row][col] !== ".") {
                continue;
            }
            let openDirections = 0;

            for (let neighboringCells = 0; neighboringCells < dirNames.length; neighboringCells++) {
                let dirName = dirNames[neighboringCells];

                let dirRow = directions[dirName][0];
                let dirCol = directions[dirName][1];

                let nowRow = row + dirRow;
                let nowCol = col + dirCol;

                if (maze[nowRow] === undefined || maze[nowRow][nowCol] === undefined) {
                    continue;
                }

                if (maze[nowRow][nowCol] !== "#") {
                    openDirections++;
                }
            }

            if (openDirections === 1) {
                deadEnds++;
            }
        }
    }
    return deadEnds;
}
function pathLength(maze) {
    let path = 0;
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[0].length; col++) {
            if (maze[row][col] === "\*") {
                path++;
            }
        }
    }
    return path;
}

console.log("Тупики:", countDeadEnds(maze));

let result = solveMaze(maze, 1, 1);

console.log("Путь существует:", result);
console.log(maze);
console.log("Длина пути:", pathLength(maze));