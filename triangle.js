function triangle (number) {
    let cycle = 0;
    let basket = "";
    let z = 0;
    while (cycle < number) {
        let space = 0;
        
        while (space < number - z) {
            basket = basket + " "; 
            space++;
        }
        
        let stars = 0;
        while (stars < z + 1) {
            basket = basket + "*";
            basket = basket + "*";
            stars++;
        }
        
        basket = basket +  "\n";
        cycle++;
        z++
    }
    return basket;
}
console.log(triangle(5));