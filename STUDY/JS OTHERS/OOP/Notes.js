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


/**
 * Object referencing and copying
 * - Objects are stored and copied by reference
 * 
 * Cloning and merging - object.assign
 * - Copying an object variable creates on emore reference to the object.
 * - Create an existing object and replicate the existing one.
 * 
 *  object.assign(dest, [src1, src2, src3...])
 */

let user = { ma,e: "John"};

let permission1 = {canView: true };
let permission2 = { canEdit: true };

//copy all properties from permission1 and permission2 into user
Object.assign(user, permission1, permission2);

//now user = {name: "John", canView: true, canEdit: true}
alert(user.name);
alert(user.canView);
alert(user.canEdit);

//If the copied property name already exists, it gets overwritten
Object.assign(user, { name: "Pete" });

alert(user.name); //Pete

// We can use Object.assign to clone an object

let user2 = {
    name: "John",
    age: 30,
    sizes : {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user2);

alert(clone.name);
alert(clone.age);

/**
 * The call structuredClone(object) mothod clones the object with the nested propertiess
 */

let clone2 = structuresClone(user);

alert(user2.sizes === clone2.sizes);

user.sizes.width = 60;
alert(user.sizes.width);

/**
 * OBJECT METHODS 'this'
 * 
 * - Actions are represented in JS by functions in properties
 * - A function that is a property of  an object is called a method.
 */
user.sayHi = function() {
    alert("Hello");
}

user.sayHi(); //Hello

let user6 = {
    name: "John",
    age: 30,

    sayHi() {
        alert(this.name);
    }
}

user6.sayHi(); //John


/**
 * CONSTRUCTOR FUNCTION
 * 
 * - Named with capital letters first
 * - Should v=be executed only with "new" operator
 * 
 * - When a function is executed with new, it dioes the following:
 *     A new empty object is created and assigned to this
 *     The function body executes
 *     The value of this is returned.
 */

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user7 = new User("Jack");

alert(user7.name); //Jack
alert(user7.isAdmin); //false