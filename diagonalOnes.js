function diagonalOnes (number) {
    let result = []


    for (let lineQuantity = 0; lineQuantity < number; lineQuantity++) {
        result.push([])

        for (let index = 0; index < number; index++) {
            if (lineQuantity === index) {
                result[lineQuantity].push(1)
            } else {
                result[lineQuantity].push(0)
            }
        }
    }

    return result
}

console.log (diagonalOnes(4))

// [
//   [1,0,0,0],
//   [0,1,0,0],
//   [0,0,1,0],
//   [0,0,0,1]
// ]