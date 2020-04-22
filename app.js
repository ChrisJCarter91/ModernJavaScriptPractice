// if(something){
//     do something
// } else {
//     do something else
// };

const id = 100;

// //Equal to
// if(id == 100){
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// // Not equal to
// if(id != 101){
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// // Equal to Value & Type
// if(id === 100){
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// // Not Equal to Value & Type
// if(id !== 100){
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

//Check to see if id is defined
// if(typeof id !== "undefined"){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log("NO ID");
// }

//IF ELSE

const color = "Red";

// if(color === "Red"){
//     console.log("Color is Red");
// } else if(color === "Blue") {
//     console.log("Color is Blue");
// } else {
//     console.log("Color is not Red or Blue")
// }

// LOGICAL OPERATORS

const name = "Steve";
const age = 5;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}

//OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in the race`);
} else {
    console.log(`${name} is registered for the race`);
}

//Ternary Operator
console.log(id === 100 ? "Correct" : "Incorrect");