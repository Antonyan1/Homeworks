function checkPrime(number) {
    let cycle = 2;

    while (cycle <= Math.sqrt(number)) {
        if (number % cycle === 0) {
            return false;
        }
        cycle++;
    }
    return true;
}

console.log("Expexted: true, Result: " + checkPrime(7));
console.log("Expexted: true, Result: " + checkPrime(17));
console.log("Expexted: false, Result: " + checkPrime(26));
console.log("Expexted: false, Result: " + checkPrime(17 * 13));