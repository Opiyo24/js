//Key - value champions - Dictionaries in python.

//Creating maps
const personMap = new Map([
    ["name", "Alice"],
    [25, "age"],
    [true, "isEmployee"],
]);


//Using aet() method
const productMap = new Map();
productMap.set("id", 101);
productMap.set("name", "Headphones");
productMap.set({ brand: "XYZ" }, "details");


//Iterating maps
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");


for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}

for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value)
}

for (const [key, value] of myMap.entries()) {
    console.log(`${key} = ${value}`);
}


//Iterating with for...Each
myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
})