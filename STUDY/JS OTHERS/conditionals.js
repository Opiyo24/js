//If statement and the conditional operator ?

let year = promPt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert('You are right');

//To execute more than one statement:
if (year == 2015) {
    alert("That's correct!");
    alert("You're so smart!");
} else {
    alert('How can you be so wrong!!');
}


if (year < 2015) {
    alert('Too early ...');
} else if (year > 2015) {
    alert('Too late');
} else {
    alert('Exactly!');
}


//Conditional operator ?
/**
 * Sometimes we need to assign a variable based on a condition.
 */

let accessAllowed;
let agea = prompt('How old are you? ');

if (agea > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);

/**
 * let result = condition ? value1 : value2;
 */

let accessAlloweed = (age > 10) ? true : false;



let age = prompt("Age? ", 18);

let message = (age < 3) ? 'Hi, baby!' : 
    (age < 18) ? 'Hello!' : 
    (age < 100) ? 'Greetings!' : 
    'What an unusual age!';

alert(message);


//Non - traditional use of ?

/**
 * SOmetimes the ? is used in place of the if
 */

let company = prompt('Which company created JavaScript? ', '');

(company == 'Netscape') ?
    alert('Right!') : alert('Wrong!');


if (company == Netscapes) {
    alert("Right!");
} else {
    alert("Wrong!");
}