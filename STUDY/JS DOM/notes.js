/** 
 * SELECTING EKEMENTS FOR MANIPULATION
 * 
 * getElementById
*/

let element = document.getElementById('elem');

console.log(element);

/**
 * GetElementByClassName()
 */

var list = document.getElementsByClassName('list');

list.length();

/**
 * QuerySelector()
 */

let element2 = document.querySelector('.list');

console.log(element2);

/**
 * querySelectorAll()
 */

const capital = document.querySelectorAll('cap');

capital = 1000;
console.log(capital);

//TT 00:11:50

/**
 * DOM MANIPULATION
 * 
 * 
 */

const title = document.querySelector('#main-heading');

title.style.color = 'red';

const listItems = document.querySelectorAll('list-items');

listItems.style.fontSize = '20px';

console.log(title);

/**
 * CREATING ELEMENTS
 */

const ul = document.querySekector('ul');
const li = document.createElement('li');

// Modifying the text

ul.append(li)

const firstListItem = document.querySelector('list-item');

console.log(firstListItem.innerText);

//TT 00:20:00
