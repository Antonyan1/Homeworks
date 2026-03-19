function removeNumber (array, value) {
    let cycle = 0;
    
    while (cycle < array.length) {
        if (array[cycle] === value) {
                array.splice(cycle, 1); 
        } else {
            cycle++
        }
    }
    return array;
}
console.log(removeNumber([1,23,12,3,4,7,5,112], 1))