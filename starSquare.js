function starSquare(num) {
    let upperPart = "";
    let middlePart = "";
    let lowerPart = "";
    
    let finalResult = "";
    
    for (let starQuantity = 0; starQuantity < num; starQuantity++) {
        upperPart = upperPart + "*";
    }
    finalResult = finalResult + upperPart + "\n";
    
    for (let rowQuantity = 0; rowQuantity < num - 2; rowQuantity++) {
        middlePart = "";
        middlePart = middlePart + "*";
        
        for (let spaceQuantity = 0; spaceQuantity < num - 2; spaceQuantity++) {
            middlePart = middlePart + " ";
            
        }
        middlePart = middlePart + "*";

        finalResult = finalResult + middlePart + "\n";
    }

    starQuantity = 0;
    for (;starQuantity < num; starQuantity++) {
        lowerPart = lowerPart + "*";
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