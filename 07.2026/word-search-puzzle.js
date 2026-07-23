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
    let gridSize = grid[1].length * grid.length;
    let directions = ["up", "down", "left", "right", "upLeft", "upRight", "downLeft", "downRight"]
    for (let index = 0; index < words.length; index++) {
        for (let findDirection = 0; findDirection < gridSize; findDirection++) {
            let randomRow = Math.floor(Math.random() * grid.length);
            let randomCol = Math.floor(Math.random() * grid[1].length);
            let rndmDirection = Math.floor(Math.random() * directions.length);
            
            let row = 0;
            let col = 0;
            if (directions[rndmDirection] === "up") {
                row = -1;
                col =  0;
            }
            if (directions[rndmDirection] === "down") {
                row =  1;
                col =  0;
            }
            if (directions[rndmDirection] === "left") {
                row =  0;
                col = -1;
            }
            if (directions[rndmDirection] === "right") {
                row =  0;
                col =  1;
            }
            if (directions[rndmDirection] === "upLeft") {
                row = -1;
                col = -1;
            }
            if (directions[rndmDirection] === "upRight") {
                row = -1;
                col =  1;
            }
            if (directions[rndmDirection] === "downLeft") {
                row =  1;
                col = -1;
            }
            if (directions[rndmDirection] === "downRight") {
                row =  1;
                col =  1;
            }
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
    return grid;
}
function findWord(grid, word) {
    let directions = ["up", "down", "left", "right", "upLeft", "upRight", "downLeft", "downRight"];
    let findWord = true;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {        
            if(grid[row][col] === word[0]) {
                for (let chooseDirection = 0; chooseDirection < directions.length; chooseDirection++) {
                    let dirRow = 0;
                    let dirCol = 0;

                    if (directions[chooseDirection] === "up") {
                        dirRow = -1;
                        dirCol =  0;
                    }
                    if (directions[chooseDirection] === "down") {
                        dirRow =  1;
                        dirCol =  0;
                    }
                    if (directions[chooseDirection] === "left") {
                        dirRow =  0;
                        dirCol = -1;
                    }
                    if (directions[chooseDirection] === "right") {
                        dirRow =  0;
                        dirCol =  1;
                    }
                    if (directions[chooseDirection] === "upLeft") {
                        dirRow = -1;
                        dirCol = -1;
                    }
                    if (directions[chooseDirection] === "upRight") {
                        dirRow = -1;
                        dirCol =  1;
                    }
                    if (directions[chooseDirection] === "downLeft") {
                        dirRow =  1;
                        dirCol = -1;
                    }
                    if (directions[chooseDirection] === "downRight") {
                        dirRow =  1;
                        dirCol =  1;
                    }
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
                            start: [row, col],
                            direction: directions[chooseDirection]
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
let myWords = ["Math", "JavaScript", "Objects", "Array", "Codding", "Cycle"];
placeWord(myGrid, myWords);
for (let i = 0; i < myGrid.length; i++) {
    let rowString = myGrid[i].map(cell => cell === "" ? "." : cell).join(" ");
    console.log(rowString);
}
console.log(findWord(myGrid, "Array"));
fillingEmptySpaces(myGrid);
for (let i = 0; i < myGrid.length; i++) {
    console.log(myGrid[i].join(" "));
}