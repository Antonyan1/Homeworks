function starSquare(num) {
    let starQuantity = 0;
    let upperPart = "";
    let middlePart = "";
    let lowerPart = "";
    let rowQuantity = 0;
    
    let finalResult = "";
    
    while (starQuantity < num) {
        upperPart = upperPart + "*";
        starQuantity++;
    }
    finalResult = finalResult + upperPart + "\n";
    
    while (rowQuantity < num - 2) {
        middlePart = "";
        middlePart = middlePart + "*";
        
        let spaceQuantity = 0;
        while (spaceQuantity < num - 2) {
            middlePart = middlePart + " ";
            spaceQuantity++
        }
        middlePart = middlePart + "*";

        finalResult = finalResult + middlePart + "\n";
        rowQuantity++
    }

    starQuantity = 0;
    while (starQuantity < num) {
        lowerPart = lowerPart + "*";
        starQuantity++
    }
    finalResult = finalResult + lowerPart;
    return finalResult;
}

/**
 * Vardan version
 */
function starSquare2(num) {
    let reslult = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (j === 0 || j === num - 1 || i === 0 || i === num - 1) {
                reslult = reslult + "*";
            } else {
                reslult = reslult + " ";
            }
        }
        reslult = reslult + "\n";
    }
    return reslult;
}


/**
  ****
  *  *
  *  *
  ****

 */

console.log(starSquare2(7));