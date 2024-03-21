//let func = (arg1, arg2, ..., argN) => expression;

let sum = (a, b) => a + b;

alert( sum(1, 2) );

//If we have only one paramater, then the pearentheses around the arguments can be
//omitted

let double = n => n * 2;

alert(double(3)); //6

//If yhere are no arguments, the parenthesis are empty but they must be present

let sayHi = () => alert("Hello!");

let sum2 = (a, b) => {
    let result = a + b;
    return result;
};

alert(sum2(1, 2)); //3


let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    "Do you agree?",
    function() {alert("You agreed."); },
    function() {alert("You cancelled the execution."); }
);