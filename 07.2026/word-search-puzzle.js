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
function placeWord(grid ,words) {
    let gridSize = grid[1].length * grid.length;
    for (let index = 0; index < words.length; index++) {
        let placed = false;

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
                placed = true;
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
        if (placed === false) {
            console.log("Unable to place word", words[index]);
        }
    }
    return grid
}
function findWord(grid, word) {
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
function gridStats(grid, words) {
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

    let wordsPlaced = 0;
    let wordsFailed = 0;
    let horizontal = 0;
    let vertical = 0
    let diagonal = 0
    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        if (findWord(grid, word).found === true) {
            wordsPlaced++;
            if (findWord(grid, word).direction === "left" || findWord(grid, word).direction === "right") {
                horizontal++;
            } else if (findWord(grid, word).direction === "up" || findWord(grid, word).direction === "down") {
                vertical++;
            } else {
                diagonal++;
            }
        } else {
            wordsFailed++
        }
    }
    let longestWord = words[0];
    let shortestWord = words[0];
    for (let index = 0; index < words.length; index++) {
        let currentWords = words[index]
        if (currentWords.length > longestWord.length) {
            longestWord = currentWords;
        }
        if (currentWords.length < shortestWord.length) {
            shortestWord = currentWords;
        }
    }
    return {
        totalCells: gridSize,
        wordCells: filled,
        fillerCells: emptycells,
        wordsPlaced: wordsPlaced,
        wordsFailed: wordsFailed,
        longestWord: longestWord,
        shortestWord: shortestWord,
        directions: {
            horizontal: horizontal,
            vertical: vertical,
            diagonal: diagonal
        }
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
function displayGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        let rowString = grid[i].map(cell => cell === "" ? "." : cell).join(" ");
        console.log(rowString);
    }
}
let myGrid = createGrid(13, 13);
let myWords = ["math", "javascript", "objects", "array", "codding", "cycle"];
placeWord(myGrid, myWords);
displayGrid(myGrid);
console.log(findWord(myGrid, "array"));
fillingEmptySpaces(myGrid);
displayGrid(myGrid);