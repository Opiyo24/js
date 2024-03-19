//WHILE AND FOR

while (condition) {
    //code
    // loop body
}

let i = 0;

while (i < 3) {
    alert(i);
    i++;
}


for (let i = 0; i < 3; i++) {
    alert(i);
}

let sum = 0;

while (true) {
    let value = +prompt("Enter a num ber", '');

    if (!value) break;

    sum += value;
}
alert ('sum: ' + sum);