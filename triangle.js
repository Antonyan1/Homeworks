function triangle (number) {
    let cycle = 0;
    let basket = "";
    let z = 0;
    let x = 1;

    while (cycle < number) {
        let space = 0;
        
        while (space < number - z) {
            basket = basket + " "; 
            space++;
        }
        
        let stars = 0;
        while (stars < x) {
            basket = basket + "*";
            stars++;
        }
        
        basket = basket +  "\n";
        cycle++;
        z++
        x = x + 2
    }
    return basket;
}
console.log(triangle(5));