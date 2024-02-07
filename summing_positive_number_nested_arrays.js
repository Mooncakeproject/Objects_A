// create a function named sumPositiveNumbers.
// This function should take an object as its parameter.
// Within this object, there are two properties array1 and array2, each containing an 
// array of numbers.
// The function should calculate the sum of all positive numbers from both arrays 
// combined and return the total sum.

function sumPositiveNumbers(object) {
    let a1 = object.array1
    let a2 = object.array2
    let sum = 0

    for (let item of object.array1) {
        if (item >= 0) {
            sum = sum + item
        }
    }
    
    for (let item of a2) {
        if (item >= 0) {
            sum = sum + item
        }
    }
    return sum
}
// Example usage
// const example1 = {
//     array1: [1,-4,5,-7],
//     array2: [5,66,7,89]
// }
// const example2 = {
//     array1: [13,43,53,7],
//     array2: [5,636,37,839]
// }


// console.log('sum1', sumPositiveNumbers(example1));
// console.log('sum2', sumPositiveNumbers(example2));