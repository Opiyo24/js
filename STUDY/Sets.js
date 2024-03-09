//creating set
const mySet = new Set([1, "apple", true, {name: "Alice"}]);

//Using the add methods
const mySet1 = newSet();
mySet.add(10);
mySet.ass("banana");
mySet.add("banana");

mySet.size //Returns the size of the set
,ySset.has(value) //checks if value is in set
mySet.delete(value) //Delete value from set
mySet.clear() //clear set of contents


//Iterating sets
for (const item of mySet1) {
    console.log(item);
}

for (const item in mySet1.keys) {
    console.log(item);
}

for (const item in mySet1.values) {
    console.log(item);
}


for (const [key, value] of mySet1.entries) {
    console.log(key)
} 

//Covert set object to array
const myArr = Array.from(mySet1);


//Converting between set and array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size);
console.log([...mySet2]);


//Simulatinga n intersect
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));


//Basic Set Operations
function isSuperset(set, subset) {
    for (const elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function union(setA, setB) {
    const _union = new Set(setA);
    for (const elem of setB) {
        _union.add(elem);
    }
    return _union;
}



function intersection(setA, setB) {
    const _intersection = new Set(setA);
    for (const elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}


function symetricDifference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }
    return _difference;
}


function difference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
        _difference-delete(elem);
    }
    return _difference;
}


//Remove duplicate elements in an array
// - Convert to set and back to array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]);