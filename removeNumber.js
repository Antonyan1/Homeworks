function removeNumber(array, value) {
    for (let cycle = 0 ;cycle < array.length;) {
        if (array[cycle] === value) {
            array.splice(cycle, 1);
        } else {
            cycle++;
        }
    }
    return array;
}
console.log(removeNumber([1, 23, 12, 3, 4, 7, 5, 112], 4))