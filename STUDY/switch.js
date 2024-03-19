/**
 * switch(x) {
 *  case 'value1':
 *    // code
 *   [break]
 * case 'value2':
 *  // code
 * [break]
 * ...
 * default:
 * // code
 * [break]
 * }
 */


let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    
    case 4:
        alert('Exactly!');
        break;
    
    case 5:
        alert('Too big');
        break;

    default:
        alert("I dont know such values");
}

//GROUPING CASES
let b = 3;

switch (b) {
    case 4:
        alert("Right!");
        break;
    
    case 3:
    case 5:
        alert("Wrong!");
        alert("Why dont you like a math class?");
        break;

    default:
        alert("The result is strange. Really.")
}