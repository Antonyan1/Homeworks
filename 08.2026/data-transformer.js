let sales = [
    { id: 1, product: "Laptop", category: "Electronics", price: 1200, quantity: 3, date: "2025-01-05" },
    { id: 2, product: "Phone", category: "Electronics", price: 800, quantity: 7, date: "2025-01-08" },
    { id: 3, product: "Desk", category: "Furniture", price: 350, quantity: 2, date: "2025-01-08" },
    { id: 4, product: "Chair", category: "Furniture", price: 150, quantity: 10, date: "2025-01-12" },
    { id: 5, product: "Headphones", category: "Electronics", price: 200, quantity: 15, date: "2025-01-15" },
    { id: 6, product: "Lamp", category: "Furniture", price: 45, quantity: 20, date: "2025-01-18" },
    { id: 7, product: "Tablet", category: "Electronics", price: 600, quantity: 5, date: "2025-01-22" },
    { id: 8, product: "Bookshelf", category: "Furniture", price: 275, quantity: 4, date: "2025-01-25" },
    { id: 9, product: "Monitor", category: "Electronics", price: 450, quantity: 6, date: "2025-01-28" },
    { id: 10, product: "Sofa", category: "Furniture", price: 900, quantity: 1, date: "2025-01-30" }
];

function filterByCategory(sales, category) {
    let calculation = sales.filter(function(sale) {
        let result = sale.category === category;
        return result;
    });
    
    return calculation;
}

function filterByPriceRange(sales, min, max) {
    let calculation = sales.filter(function(sale) {
        let result = sale.price >= min && sale.price <= max;
        return result;
    });
    return calculation;
}

function filterByDate(sales, startDate, endDate) {
    let calculation = sales.filter(function(sale) {
        let result = sale.date >= startDate && sale.date <= endDate;
        return result;
    });
    return calculation;
}

function addTotal(sales) {
    let result = sales.map(function(sale) {
        return {
            id: sale.id,
            product: sale.product,
            category: sale.category,
            price: sale.price,
            quantity: sale.quantity,
            date: sale.date,
            total: sale.quantity * sale.price
        }
    });
    return result;
}

function formatForReport(sales) {
    let result = sales.map(function(sale) {
        return sale.product + " — " + sale.quantity + " шт. — $" + sale.total;
    });
    return result;
}

function totalRevenue(sales) {
    let calculation = sales.reduce(function(accumulator, sale) {
        let result = accumulator + sale.price * sale.quantity;
        return result
    }, 0);
    return calculation;
}

function averagePrice(sales) {
    let sum = sales.reduce(function(accumulator, sale) {
        let result = accumulator + sale.price;
        return result;
    }, 0);
    let result = sum / sales.length;
    return result;
}
console.log(filterByCategory(sales, "Electronics"));
console.log(filterByPriceRange(sales, 200, 600));
console.log(filterByDate(sales, "2025-01-08", "2025-01-18"));
console.log(addTotal(sales));
console.log(formatForReport(addTotal(sales)));
console.log(totalRevenue(sales));
console.log(averagePrice(sales));