// CONST & LET
const namess = 'brad';
let names = 'john';

name = 'brad';

console.log(name);

const candybar = {
  flavor: 'chocolate',
  length: 6
};

const nums = [1, 2, 3, 5];
console.log(nums);

// ARROW FUNCTIONS
function sayHello() {
  console.log('Hello');
}

sayHello();

const whatShouldISay = name => console.log(`my name is ${name}`);

whatShouldISay('babcock');

const sayHey = () => console.log('hey');

// FOREACH
const fruits = ['Apples', 'Oranges', 'Bananas'];

fruits.forEach((fruit, index) => {
  console.log(index + 1 + ' ' + fruit);
});

// MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(singleFruit);

// FILTER

const people = [
  { id: 1, name: 'karen' },
  { id: 2, name: 'bob' },
  { id: 3, name: 'corey' }
];

const filterPeople = people.filter(people => people.id !== 2);
console.log(filterPeople);

const filterName = people.filter(people => people.name == 'corey');
console.log(filterName);

// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES
