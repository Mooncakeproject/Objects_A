// Create a function named calculateTotalPrice.
// This function should take an array of objects as its parameter.
// Each object in the array represents an item, and each item has a price property.
// The function should calculate the total price of all items in the array by summing up their individual prices and return the total sum.

function calculateTotalPrice(items) {
    let sum = 0  

    for (let item of items) {
        sum = sum + item.price
    }
    return sum
}