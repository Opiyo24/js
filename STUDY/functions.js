//FUNCTION DECLARATION

function showMessage() {
    alert("Hello everyone!");
}

/**
 * function functionName(parameter1, parameter2, parameter3) {
 *  code
 * }
 */


//PARAMETERS
/**
 * - We can pass arbitrary data to functions as parameters
 * The example below has two parameters from and text
 */

function showMessage(from, text) {
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!');
showMessage('Ann', 'Whats\'s up?');

/**
 * 
 */

function showMessage2(from, text) {
    from = '*' + from + '*';

    alert(from + ': ' + text)
}

let from = 'Ann';

showMessage2(from, "Hello");

alert(from);


//Authenticating for default parameters
function showMessage3(text) {
    if (text === undefined) {
        text = "empty message";
    }
    alert(text);
}

showMessage3();

//Always authenticate parameter values whenever used duric function declaration.


//RETURN value
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        let reponse = confirm('Do you have permission from your parents?');
        if (response == true) {
            return true;
        } else {
            return false;
        }
    }
}

let age = prompt("How old are you?", 18);

if (checkAge(age) || response) {
    alert('Access granted');
} else {
    alert('Access denied!');
}

function showMovieAge(age) {
    if (!checkAge(age)) {
        return;
    }

    alert("Showing you the movies!");
}