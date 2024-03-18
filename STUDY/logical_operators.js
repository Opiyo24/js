/**
 * || OR
 * && AND
 * ! NOT
 * ?? NULLISH COALESCING
 */

let result = a || b;
//If any of its arguments are true, it returns true, otherwise it returns false.

if (1 || 0) {
    alert('Truthy!');
}

let hour = 0;

if (hour < 10 || hour > 18) {
    alert('The office is closed');
}

let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour2 > 18 || isWeekend) {
    alert('The office is closed.');
}