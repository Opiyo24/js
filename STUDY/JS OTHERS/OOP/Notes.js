/**
 * Creating an empty object
 */
let user = new Object(); // "object constructor" syntax

let user2 = {
    name: "John",
    age: 30,
    "likes birds": true
};  // "object literal" syntax

alert(user2.name); // John
alert(user2.age); // 30

user2.isAdmin = true; // add new property

delete user2.age; // remove property

/**
 * SQUARE BRACKETS
 * - For multiword preperties, the dot notation doesnt work
 * Square brackets notation must be used
 */

let user3 = {};

//set
user["likes birds"] = true;

//get
alert(user3["likes birds"]); // true

//delete
delete user3["likes birds"];


let key = prompt("What do you like to know about the user? ", "name");
alert(user[key]);

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user4 = makeUser("John", 30);
alert(user.name); //John

function makeUserTwo(name, ahe) {
    return {
        name,
        age,
    };
    //Shorthand for the function above
}

/**
 * the for ... in loop
 * - Used to walk over all keys of an object
 * 
 * for (key in objetc) {
 * // executes the body for each key among object properties//executes the body for each key among object properties
 * }
 */

let user5 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user5) {
    //keys
    alert(key); //lists all keys

    //values for the keys
    alert(user[key]); //John, 30, true
}