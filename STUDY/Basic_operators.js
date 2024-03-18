//Exponentiation
/**
 * The operation a ** b raises a to the power of b
 */

alert(2 ** 2); //4
alert(2 ** 3); //8
alert(2 ** 4); //16

//sString concatenation (+)
let s = "my" + "String";
alert(s); //myString

/**
 * If one of the operands is a string, the other is converted to a string too.
 */

alert(2 + 2 + '1' ); // "41" and not "221"


//Numeric conversion, Unary +
/**
 * The operator + applied to a single value, doesnt dp anything to numbers
 * But if the operand is not a number, the unary plus converts it into a number
 * It does the same this as the function Number()
 */

let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23", the binary plus concatenates strings
alert(+apples + +oranges); // 5, the unary plus converts strings to numbers
alert(Number(apples) + Number(oranges)); // 5, the same as above

//OPerator Precedence
// Precedence 	Name 	            Sign
// … 	        … 	                …
// 14 	        unary plus 	        +
// 14 	        unary negation 	    -
// 13 	        exponentiation 	    **
// 12 	        multiplication 	    *
// 12 	        division 	        /
// 11 	        addition 	        +
// 11 	        subtraction 	    -
// … 	        … 	                …
// 2 	        assignment 	        =
// … 	        … 	                …


//Assignment
/**
 * Assignment = returns a value
 * THe call x = value writes the value into x and returns the value
*/

//Chaining Assignments
let a, b, c;

a = b = c = 2 + 2;
alert(a); //4
alert(b); //4
alert(c); //4


