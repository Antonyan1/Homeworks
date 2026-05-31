function checkPrime(number) {
    for (let cycle = 2; cycle <= Math.sqrt(number); cycle++) {
        if (number % cycle === 0) {
            return false;
        }
    }
    return true;
}

console.log("Expexted: true, Result: " + checkPrime(7));
console.log("Expexted: true, Result: " + checkPrime(17));
console.log("Expexted: false, Result: " + checkPrime(26));
console.log("Expexted: false, Result: " + checkPrime(17 * 13));