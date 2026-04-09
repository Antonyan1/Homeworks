function triangle (number) {
    let basket = "";
    let z = 0;
    let x = 1;

    for (let cycle = 0; cycle < number; cycle++) {
        
        for (let space = 0; space < number - z; space++) {
            basket = basket + " "; 
        }
        
        for (let stars = 0; stars < x; stars++) {
            basket = basket + "*";
        }
        
        basket = basket +  "\n";
        z++
        x = x + 2
    }
    return basket;
}
console.log(triangle(5));