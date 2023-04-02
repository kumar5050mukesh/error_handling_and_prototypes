

function filterByCategory(products) {
    return function (category) {
        return products.filter(product => product.category === category);
    }
}

let products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" }
];

let electronicsFilter = filterByCategory(products);
console.log(electronicsFilter("Clothing"));
