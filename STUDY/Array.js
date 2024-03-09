// 'fruits', array created using array literal notation

const fruits = ["Apple", "Banana"];
console.log(fruits.length);

//2

// 'fruits2' array created using the Array() constructor
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
//2


// "fruits3" array created using String.prototype.split()
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);


//Find the index of an item in an array
const fruits4 =  ["Apple", "Banana"];
console.log(fruits4.indexOf('Banana')); // 1


//Append an item to an array
const fruits5 = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits5); // ['Apple', 'Banana', 'Orange']
console.log(newLength); // 3



//Remove multiple items from an array
const fruits6 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits6); // ["Apple", "Banana"]


//Iterate over an array
const fruits7 = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits7) {
    console.log(fruit);
}


// Call a function on each element
const fruits8 = ["Apple", "Mango", "Cherry"];
fruits8.forEach((item, index, array) => {
    console.log(item, index);
});


//Merge multiple arrays
const fruits9 = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits9.concate(moreFruits);
console.log(combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]


// Using array to tabulate set of values
const values = [];
for (let x = 0; x < 10; x++) {
    values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);