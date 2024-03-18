//Alert
function hello() {
    alert("Hello");
}
hello();
// The mini window with the message is called the modal window
//MOdal - the visitor cannot interact with the rest of the page until they have dealt with the window.


//Prompt
function news() {
    let result;

    result = prompt(title, [dxefault]);
}
// Shews a modal window with a text message, an input field for the visitor and the buttons OK/Cancel

//Title: The text to show the visitor
//default: OPtional second parameter, default input value.
// The visitor can type something in the prompt and pres OK
// THen we get the text as the value of the variable result.
// Or they can cancel and then we will get null as the rsult.

let age = prompt('How old are you?', 100);

alert('You are ${age} years old!');


//Confirm
let result2 = confirm(question);

// The function confirm sjows a modal window witrha  question and two buttons.
// The result is true if ok and false if otherwise.

let isBoss = confirm("ARe you the Boss?");

alert( isBoss );