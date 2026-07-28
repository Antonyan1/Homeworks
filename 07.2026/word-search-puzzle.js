function createGrid (lines, columns) {
    let grid = [];
    for (let rows = 0; rows < lines; rows++) {
        grid.push([]);
        for (let cols = 0; cols < columns; cols++) {
            grid[rows].push("");  
        }
    }
    return grid;
}

function placeWord(grid ,words) {
    let result = grid;
    let gridSize = grid[1].length * grid.length;
    let directions = {
    up:        [-1,  0],
    down:      [ 1,  0],
    left:      [ 0, -1],
    right:     [ 0,  1],
    upLeft:    [-1, -1],
    upRight:   [-1,  1],
    downLeft:  [ 1, -1],
    downRight: [ 1,  1]
    };
    for (let index = 0; index < words.length; index++) {
        for (let findDirection = 0; findDirection < gridSize; findDirection++) {
            let randomRow = Math.floor(Math.random() * grid.length);
            let randomCol = Math.floor(Math.random() * grid[1].length);
            let dirObject = Object.keys(directions);
            let randomDirName = dirObject[Math.floor(Math.random() * dirObject.length)];

            let [row, col] = directions[randomDirName];
            let weCanPlace = true;

            let nowsRow = randomRow;
            let nowsCol = randomCol;
            for (let checkLetters = 0; checkLetters < words[index].length; checkLetters++) {
                if (grid[nowsRow] === undefined || grid[nowsRow][nowsCol] === undefined) {
                    weCanPlace = false;
                    break;
                }
                if (grid[nowsRow][nowsCol] !== "" && grid[nowsRow][nowsCol] !== words[index][checkLetters]) {
                    weCanPlace = false;
                    break;
                }
                nowsRow = nowsRow + row;
                nowsCol = nowsCol + col;
            }
            if (weCanPlace === true) {
                nowsRow = randomRow;
                nowsCol = randomCol;
                for (let letter = 0; letter < words[index].length; letter++) {
                    grid[nowsRow][nowsCol] = words[index][letter];
                    nowsRow = nowsRow + row;
                    nowsCol = nowsCol + col;
                }
                break;
            }
        }
    }
    
    return result;
}
function findWord(grid, word) {
    let directions = {
        up:        [-1,  0],
        down:      [ 1,  0],
        left:      [ 0, -1],
        right:     [ 0,  1],
        upLeft:    [-1, -1],
        upRight:   [-1,  1],
        downLeft:  [ 1, -1],
        downRight: [ 1,  1]
    };

    let dirNames = Object.keys(directions);
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {        
            if(grid[row][col] === word[0]) {
                for (let chooseDirection = 0; chooseDirection < dirNames.length; chooseDirection++) {
                    let dirName = dirNames[chooseDirection];    
                    let dirRow = directions[dirName][0];
                    let dirCol = directions[dirName][1];
                    let weFound = true;

                    let nowsRow = row;
                    let nowsCol = col;
                    for (let goToFindWord = 1; goToFindWord < word.length; goToFindWord++) {
                        nowsRow = nowsRow + dirRow;
                        nowsCol = nowsCol + dirCol;
                        if (grid[nowsRow] === undefined || grid[nowsRow][nowsCol] === undefined) {
                            weFound = false;
                            break;
                        }
                        if (grid[nowsRow][nowsCol] !== word[goToFindWord]) {
                            weFound = false;
                            break;
                        }
                    }
                    if (weFound === true) {
                        return {
                            found: true,
                            word: word,
                            start: [row, col],
                            end: [nowsRow, nowsCol],
                            direction: dirName
                        };
                    }
                }
            }
        }
    }
    return {
        found: false
    }
}
function gridStats(grid) {
    let result  = "";
    let gridSize = grid.length * grid[0].length;
    let filled = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] !== "") {
                filled++;
            }
        }
    }
    let emptycells = gridSize - filled
    return {
    totalCells: gridSize,
    filledCells: filled,
    emptyCells: emptycells
    }
}
function fillingEmptySpaces(grid) {
    let englAlphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === "") {
                let randomLetter = Math.floor(Math.random() * englAlphabet.length);
                grid[row][col] = englAlphabet[randomLetter];
            }
        }
    }
    return grid;
}
let myGrid = createGrid(13, 13);
let myWords = ["math", "javascript", "objects", "array", "codding", "cycle"];
placeWord(myGrid, myWords);
for (let i = 0; i < myGrid.length; i++) {
    let rowString = myGrid[i].map(cell => cell === "" ? "." : cell).join(" ");
    console.log(rowString);
}
console.log(findWord(myGrid, "array"));
fillingEmptySpaces(myGrid);
for (let i = 0; i < myGrid.length; i++) {
    console.log(myGrid[i].join(" "));
}