const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length

val = numbers.length;
// Check if is array

val = Array.isArray(numbers);
// Get single Value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100
// Find index of value
val = numbers.indexOf(36);

console.log(numbers)
console.log(val);