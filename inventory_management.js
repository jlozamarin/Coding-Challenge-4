// Task 1: Create an Inventory Array of Product Objects

// The inventory array contains 5 product objects, each object describes the name, price, quantity in stock, and low stock level number.
let inventory = [
    {name: "Apple iPhone 15", price: 999.99, quantity: 35, lowStockLevel: 10 },
    {name: "HP Spectre x360 14", price: 1299.99, quantity: 25, lowStockLevel: 5 },
    {name: "Apple Watch Series 9", price: 399.99, quantity: 40, lowStockLevel: 10},
    {name: "Samsung QN90B Neo QLED 4k Smart TV", price: 1299.99, quantity: 20, lowStockLevel: 4},
    {name: "Beats Fit Pro", price: 199.99, quantity: 30, lowStockLevel: 10}

;]

// Task 2: Create a Function to Display Product Details

function displayProductDetails(product) {
    let stockStatus;
    if (product.quantity <= product.lowStockLevel) {
        stockStatus = "Low Stock"; // If quantity is less than or equal to the low stock level
    } else {
        stockStatus = "In Stock"; // If quantity is above the low stock level
    }

    console.log(`Name: ${product.name}`); // Logs the product name
    console.log(`Price: $${product.price}`); // Logs the product price
    console.log(`Quantity in Stock: ${product.quantity}`);  // Logs the quantity in stock
    console.log(`Stock Status: ${stockStatus}`); // Logs the status of the stack (low or in stock)
}
