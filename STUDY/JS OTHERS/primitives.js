//NUMBERS
//ROUNDING

let num = 3.12345;
let num2 = 3.78899;

//math.floor - round down

Math.floor(num); //3

//math.ceil - round up
Math.ceil(num); //4

//math.round - round to the nearest integer
Math.round(num); //3
Math.round(num2); //4

//toFixed(n) - rounds the number to the n number of digits after the decimal
num.toFixed(3); //3.123
num2.toFixed(4); //3.7890

Math.random(); //random number between 0 and 1

Math.max(num1, num2); //returns the largest number

Math.min(num1, num2); //returns the smallest number



/**
 * ITERABLES
 * 
 * 
 */

let range = {
    from: 1,
    to: 5
};