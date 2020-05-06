//Creating Elements

//REPLACE ELEMENT

//Create Element
const newHeading = document.createElement('h2');
//Add ID
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove Element
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove List item
listItems[0].remove();

//Remove child element
list.removeChild(listItems[3]);

//Classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);