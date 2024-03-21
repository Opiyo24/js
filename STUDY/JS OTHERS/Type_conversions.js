// Alert automatically converts every values passed to it to string to show it.
//Mathematical operations convert values to numbers

//STRING CONVERSION 
/**
 * Happens when we need a string froma value
 * String(value);
 */

let value = true;
alert(typeof(value)); //boolean

value = String(value);
alert(typeof(value)); //string


//Numeric conversion
/**
 * Happens automatically in mathematical functions and expressions.
 * ie when division / is applied to non-numbers - they are converted automatically.
 */

alert("6" /"2"); //3, strings are converted to numbers
/**
 * We can use Number(value) to explicitly convert a variable to a number
 * Explicit conmversion is often required whn we read a value froma string based function/ expression.
 * If the string is not a valid number, teh result of such a conversion is NaN
 */

let str = "123";
alert(typeof(str)); //string

let num = Number(str);

alert(typeof(num)); //number


//BOOLEAN CONVERSION
/**
 * Values that are empty, loke 0, an empty string, null, undefined and NaN are considered false
 * other values become true
 */

alert(Boolean(1)); //true
alert(Boolean(0)); //false

alert(Boolean("Hello")); //true
alert(Boolean(""));//false

alert(Boolean("0")); //true - a string
alert(Boolean(" "));//true - Not an empty string