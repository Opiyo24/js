//Types by Inference
let helloWorld = "Hello world";


// To create an object with an inferred type which includes name: string and id: number ...
const user0 = {
    name: "Hayes",
    id: 0,
};

//You can explicitly describe this object using an interface declaration:
interface User {
    name: String;
    id: Number;
}

// You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName afteer a varaible declaration.
const user: User = {
    name: "Hayes",
    id: 0,
};

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user1: User = new UserAccount("Murphy", 1);


// Composing types
//With typescript, you can create complex types by combining
// simple ones. There are two popular ways to do so
// with unions and with generics


//UNIONS
//You can declare that a type could be one of many types
// You can describe a boolean as being either true or false

type MyBool = true | false;

// A popular use case for union types is to describe the set of string or number 
//literals that a value is allowed to be

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//Unions provide a way to handle different types too
//You may have a function that takes an array or a string

function getLength(onj: string | string[]) {
    return Object.length;
}

//Make a function return different values depending on whether it is pased a string or an array

function wrapInArray(obj: string | string[]) {
    if(typeof obj === "string") {
        return [obj];
    }
    return obj;
}

//GENERICS
// Provide variables to types

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


//Types that use generics

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add 
//function.
backpack.add(23);


//STructural Type System
// If two objects have the same shape, they are considered to be of the same type

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

//logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);