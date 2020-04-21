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

// Mutating arrays
//Add to end
numbers.push(250);
//Add to front
numbers.unshift(120);
//Take off from end
numbers.pop();
//Remove from front
numbers.shift();
//Splice values
numbers.slice(1,1)
//Reverse
numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();
val = numbers.sort();

console.log(numbers)
console.log(val);